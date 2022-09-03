import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import Navbar1 from "./Navbar1";


function AboutUs() {
    return (
        <div className="Container-fluid" >
        <div id="AboutUs" >
            <div className="row" style={{Height:"200px"}} >
        <Navbar1/>
           </div>
          <div className="row" style= {{Height:"200px"}} >
                <Navbar/>
           </div>
           <h1 id="faqh1" style={{paddingLeft:"45px"}}>About Us</h1>

<div className="aboutus"> 
    

<p id="aboutP"> Our journey started in March 2019 by creating a conventional Multi-Brand store by the name of Stitchclick. The vision was to provide quality products of multiple brands to customers at the best possible price under one platform. Our business model is based on low margin and high volume.
Recent events steered the world towards making radical change in the typical work models and we decided to create a digital platform to meet the challenges. Stitchclick carries the same mark of trust that is the result of our commitment and hard work. We sell original brand's fresh stock, previous year stock, export leftover; pretty much anything branded we can get our hands on.
<br /> <br />
What makes us distinguished from our competitors is that we are honest about what we sell. Experience taught us that there are customers for everything and everything get sold eventually. There is no need to lie. Being honest actually brings more customers. This is our main strength and the reason behind our customer loyalty.
<br /><br />
</div>

<div className="row" style={{Height:"200px", marginTop:"-290px"}} >
                <Footer/>
           </div>
           </div>
</div>


)
    }

export default AboutUs;