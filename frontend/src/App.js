import React, { useState } from "react";
import Layout from "./Components/Layout";
import { Routes } from "react-router-dom";
import { Route , Switch, BrowserRouter as Router} from "react-router-dom";
import ContactUs from "./Components/ContactUs";

import { Link } from "react-router-dom";
import Refund from "./Components/Refund";
import Faqs from "./Components/Faqs";
import AboutUs from "./Components/AboutUs";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Product from "./Components/Product";
import Preview from "./Components/Preview";
import Admin from "./Admin";
import AddItem from "./AddItem";
import UpdateItem from "./UpdateItem";
import AddItemm from "./AddItem";
import SignIn from "./Components/SignIn"
import Signup from "./Components/SignUp";

function App() {


    var apniValues = [];
    const [userValues, setUserValues] = useState(apniValues);
    var [prodValues, setProdValues]=useState([])
    var [cartValues, setCartValues ]=useState([])
    
    const Funcvalues = (values) => {
      setUserValues((prev) => {
        return [...prev, values ];
      });
    };
  
    function getval(val){
      setProdValues(val);
      setCartValues((prev)=>{
        return [...prev,val];
      })
      
    }
    
    function submitVal(val){
     
    }

    console.log(prodValues);
    return (
     

  // <div className="App">
      
        // <div className="App">
        <div>
          {/* <div className="row">
        <Admin/> 
        </div>
        <div  className="row" style={{marginTop: "200px"}}>
        <AddItemm/>
        </div>
        <div className="row" style={{marginTop: "700px"}} >
         <UpdateItem/> 
        </div> */}




        <Routes>

    <Route path="/" element={<Layout func={getval}/>}/>
    <Route path="/ContactUs" element={<ContactUs func={Funcvalues}/>}/>
    <Route path="/Preview" element={<Preview so={userValues}/>}/>

        
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Refund" element={<Refund />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/AddItem" element={<AddItemm />} />
          <Route path="/UpdateItem" element={<UpdateItem />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/SignIn" element={<SignIn/> } />
          <Route path="/SignUp" element={<Signup />} />
          
        </Routes>
  
            <Link to="/Layout"></Link> 
             <Link to="/ContactUs"></Link>
             <Link to="/Preview"></Link>
             <link to="/Faqs"></link>
             <link to="/AboutUs"></link>
             <link to="/Refund"></link>
             <link to="/Login"></link>
             <link to="/Register"></link>
           <Link to ="/Product"></Link>
            </div>
   // </div>
);
}
export default App;
