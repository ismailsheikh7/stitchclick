import React from "react";
import { Link } from "react-router-dom";
function Header(){
return(
    
            <div id='main'>
                <div className='name'>
                    <h1 >WELCOME TO STITCHCLICK</h1>
                    <p className='details'>Top quality, budget friendly products</p>
                    <button id="buttonheader"><Link to="/ContactUs" style={{textDecoration:"none", color:"black", fontSize:"18px"}}><a>Contact Us</a></Link> </button>
                </div>
            </div>
)
}
export default Header;
