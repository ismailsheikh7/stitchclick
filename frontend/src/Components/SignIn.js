import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";
const SignIn = () => {
  
    const [user, setUser] = useState({
      username: "",
      password: "",
      
    });
  
    const navigate = useNavigate();

    const setToken = (token) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
      
      
      const login = () => {
        const { username, password } = user;
        if (username  && password ) {
          axios.post("http://localhost:9002/ecommerce/2", user).then((res) => {
            if (res.status===200){
              navigate("/")
            }
          })
        } else {
          alert("invalid input");
        }
      }
    //   async function onClickHandler(e) {
    //     e.preventDefault();
    //     const userData = { username: username, password: password };
    //     userLogin(userData).then((res) => {
    //       if (res.data.status === 200) {
    //         alert(JSON.stringify(res.data.token));
    //         setToken(res.data.token)
    //         navigate("/");
    //       }
    //     });
    //   }
   
      return (
          <div className="main">
            <div>
    <div className="row" style={{Height:"200px"}} >
    <Navbar1/>
       </div>

       <h1 id="H1p2" style={{paddingLeft:"20px" }}>User Sign In </h1>

            <div id="signin" >
         
            <div className="row" >
              <div className="register">
               <label style={{color:"maroon",  fontFamily: "Montserrat"}}> Enter Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Your Username Here!"
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  size= "50"
                  style={{marginLeft: "50px", marginTop: "10px"}}
                  ></input>
                   <label style={{color:"maroon",  fontFamily: "Montserrat"}}> Enter Password</label>
                  <input
                    type="text"
                    name="password"
                    placeholder="Enter Your Password Here!"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    size= "50"
                    style={{marginLeft: "50px", marginTop: "10px"}}></input>

                   <label style={{color:"maroon",  fontFamily: "Montserrat"}}> Enter Password</label>
          <input
            type="text"
            name="password"
            placeholder="Enter Your Password Here!"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            size= "50"
            style={{marginLeft: "50px", marginTop: "10px"}}
          ></input>
<center style={{marginTop: "20px"}} >
          <button id="btnform5" onClick={login}>
            {" "}
            Login!{" "}
          </button>
          </center>
          </div>
          
          <center> 
          </center>
          
          
          <Link to="/SignUp"><button id="btnform6" > Sign Up</button></Link>    
         
          
              </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;