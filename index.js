
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import SigninRouter from './Routes/LoginRouter.js'
import passport from "passport";
import localStrategy from "passport-local";
import UserCollection from "./Models/UserModel.js";
import session from "express-session";
import { cfg } from "./cfg.js";
import { authenticate } from "./Middleware/Authorization.js";
import bodyParser from 'body-parser'
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()
const port = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


mongoose.connect("mongodb+srv://ismail:0000@fa18-016.vvabg.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})
app.use(express.static(path.join(__dirname, "frontend", "build")));
app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use("/ecommerce",SigninRouter)


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const ItemSchema = new mongoose.Schema({
    ItemId: Number,
    ItemName: String,
    ItemImage:String,
    ItemDescription: String, 
    ItemPrice: Number,
})

const ItemCollection = new mongoose.model("Item", ItemSchema);
//Routes

app.post("/ecommerce/AddItem",authenticate(), async (req, res)=> {
    const newItem = new ItemCollection (req.body)
    console.log(req.body)
    try{
        await newItem.save()
        res.json(newItem)
    }
    catch(err){
        console.log("Item not Added...")

    }
}) 

app.put("/ecommerce/UpdateItem",authenticate(),  (req, res)=> {
    ItemCollection.findOne({ItemId: req.body.ItemId }).exec((err,ItemData)=> {
        ItemData.ItemId= req.body.ItemId;
        ItemData.ItemName= req.body.ItemName;
        ItemData.ItemImage= req.body.ItemImage;
        ItemData.ItemPrice= req.body.ItemPrice;  
        ItemData.ItemDescription= req.body.ItemDescription;
        ItemData.save();
        res.send();

    })
}) 


app.get("/ecommerce/ViewItem",  (req, res)=> {
    ItemCollection.find({}).exec((err,data) => {
        if(err) throw err
        res.json(data);
    })
}) 


app.delete("/ecommerce/DeleteItem/:ItemId",authenticate(),  (req, res)=> {

    ItemCollection.deleteOne({ItemId:req.params.ItemId}).exec((err,ItemData) => {
        if(err) throw err
        res.json(ItemData);
    })
}) 




app.use(
  session(
    {
    secret: cfg.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }
  )
);

passport.use(new localStrategy(UserCollection.authenticate()));


app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(UserCollection.serializeUser());
passport.deserializeUser(UserCollection.deserializeUser());








app.post("/ecommerce/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/ecommerce/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });

app.listen(port,() => {
    console.log("connected!!!")
})

