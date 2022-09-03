import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";


const Schemaa =  mongoose.Schema({
    username: String,
    email: String,
    password: String,

  
     
});

Schemaa.plugin(passportLocalMongoose); 

const UserCollection =  mongoose.model("User", Schemaa)



export default UserCollection;