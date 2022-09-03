import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";

const Signup = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    
  });

const navigate = useNavigate();

const register = () => {
    const { username, email, password } = user;
    if (username && email && password ) {
      axios.post("http://localhost:9002/ecommerce/1", user).then((res) => {
        if (res.status===200){
          navigate("/")
        }
      })
    } else {
      alert("invalid input");
    }
  }
  return (


      <div>
    <div className="row" style={{Height:"200px"}} >
    <Navbar1/>
       </div>

       <h1 id="H1p2" style={{paddingLeft:"20px" }}>User Sign Up</h1>

        <div className="register">
          {console.log("User", user)}
          <label style={{color:"maroon",  fontFamily: "Montserrat"}}> Enter Your Name </label>
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="Your Full Name"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          ></input>
          <label style={{color:"maroon",  fontFamily: "Montserrat"}}> Enter Your email </label>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Your Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <br></br>

          <label style={{color:"maroon",  fontFamily: "Montserrat"}}> Enter Your password </label>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Your Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
          <br></br>
          

          <p style={{color:"maroon",  fontFamily: "Montserrat"}}> Please Click on Register to Continue.</p>
          <button id="btnform5" onClick={register}>
            Register
          </button>
        </div>
      </div>
  
  
  )
}
    
export default Signup;