import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";



function Faqs() {
    return (
        <div id="FAQmain">
          <div className="row" style={{Height:"200px"}} >
        <Navbar1/>
           </div>
          <div className="row" style={{Height:"200px"}} >
                <Navbar/>
           </div>
           <h1 id="faqh1" style={{paddingLeft:"55px"}}>Frequently Asked Questions</h1>
  
  <div id="faq">
  <div id="faqq">
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>1- DO YOU SELL ORIGINAL BRANDS?</Accordion.Header>
    <Accordion.Body>
    Yes.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>2- DO YOU SELL REPLICAS?</Accordion.Header>
    <Accordion.Body>
    No.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>3- WHAT ABOUT ORIGINAL FIRST COPIES, HIGH QUALITY ITEMS?</Accordion.Header>
    <Accordion.Body>
    Aha! trick question. No we don’t sell any of those. All our products are from original brands and 100% authentic.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>4- I AM STILL SKEPTICAL?</Accordion.Header>
    <Accordion.Body>
    Don’t worry, you don’t have to take our word for it. You have the option to scan the barcode on the packaging of the articles. It will take you
to the official website of that particular brand and confirm their authenticity.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>5- HOW COME YOUR PRICE SO MUCH LESS THEN THE BRAND OUTLET?</Accordion.Header>
    <Accordion.Body>
    One of two reasons. Either the merchandise have been bought in bulk from the supplier and we got a special price
or the articles are from last season / volume which is also known as brand left over. Plus we know a guy!
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>6. HOW DO I KNOW YOU ARE NOT LYING?</Accordion.Header>
    <Accordion.Body>
    You don’t. I guess you have to try buying from us once.
    </Accordion.Body>


    </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header>7. AND IF I DON'T LIKE IT?</Accordion.Header>
    <Accordion.Body>
    You can return it to us within a week of purchase and we will give your money back. The only condition is that it should not be damaged.
    </Accordion.Body>


    </Accordion.Item>
  <Accordion.Item eventKey="7">
    <Accordion.Header>8. YOU SOUND TOO GOOD TO BE TRUE?</Accordion.Header>
    <Accordion.Body>
    So does one’s family aggreeing on their marriage with their crush. Happily. Sometimes good things do happen!
    </Accordion.Body>

    
  </Accordion.Item>
</Accordion>      
</div>
</div>
<div className="row" style={{Height:"200px", marginTop:"-230px"}} >
                <Footer/>
           </div>
</div>


)
    }

export default Faqs;