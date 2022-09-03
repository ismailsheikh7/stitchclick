// import React, { useState } from "react"
// import axios from "axios"
// import { Navigate, useNavigate } from "react-router-dom"
// import Navbar1 from "./Navbar1"
// import Navbar from "./Navbar"
// import Footer from "./Footer"


// const Register = () => {

//     const navigate = useNavigate()

//     const [ user, setUser] = useState({
//         name: "",
//         email:"",
//         password:"",
//         reEnterPassword: ""
//     })

//     const handleChange = e => {
//         const { name, value } = e.target 
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const register = () => {
//         const { name, email, password, reEnterPassword } = user
//         if( name && email && password && (password === reEnterPassword)){
//             axios.post("http://localhost:9002/register", user)
//             .then( res => {
//                 alert(res.data.message)
//                 Navigate.push("/Login")
//             })
//         } else {
//             alert("invlid input")
//         }
        
//     }

//     return (
//         <div>
//             <div className="row" style={{Height:"200px"}} >
//         <Navbar1/>
//            </div>
//             <div className="row" style={{Height:"200px"}} >
//         <Navbar/>
//            </div>
//            <h1 id="faqh1" style={{paddingLeft:"45px"}}>Register Page</h1>
//            <div id="bglogin">
//         <div className="register">
//             {console.log("User", user)}
//             <h2 style={{color:"maroon", fontFamily:"Monsterrat"}}>Register</h2>
//             <input type="text" name="name" value={user.name} placeholder="Your Full Name" onChange={ handleChange }></input>
//             <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
//             <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
//             <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
//             <div className="button" onClick={register} >Register</div>
            
//             <div className="button" onClick={() => Navigate.push("/Login")}>Login</div>
//         </div>
//         <div className="row" style={{marginTop:"-200px"}} >
//                 <Footer/>
//            </div> 
    

//         </div>
// </div>
//     )
// }

// export default Register;