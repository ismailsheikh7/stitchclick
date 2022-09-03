
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";

function Refund() {
    return (  


        <div id="Refund">
            <div className="row" style={{Height:"200px"}} >
        <Navbar1/>
           </div>
          <div className="row" style= {{Height:"200px"}} >
                <Navbar/>
           </div>
           <h1 id="refundh1">EXCHANGE & REFUND </h1>

<div className="Refund"> 
<h2 id="ref1">EXCHANGE AND RETURN POLICY</h2>
<h4 id="ref2">At brandstorepk, our customers are our first priority. Our customer care team will facilitate you on each step if you wish to exchange or return your purchased item. The help you need is just a click away!</h4>
<br />
<h4 id="ref3">Domestic Orders:</h4>
    
<p id="refP"> <h6 id="rehf6"> Valid Days of Exchange: </h6> Any article purchased online can be exchanged within 7 days, once the article has been delivered, given that the customer has proof of purchase. For customers who opt for online exchange process, with a valid reason for exchange, won’t have to pay courier charges for exchange pickup.
<br />
<br />
 <h6 id="rehf6">Proof of Purchase:</h6> This includes either a receipt or the online order confirmation email.
<br />
<br />
 <h6 id="rehf6">Conditions Qualified:</h6> Articles are qualified for change only if they are unused, all tags are intact, packing is in its original condition and original invoice is present. Also, state a valid reason for requesting an exchange, such as if the article is defected, in wrong size, or incorrect. In case of article exchange/Return, it should be in original packing. Similarly, with articles that are delivered in boxes such as the Unstitched Women's collection, Menswear and semi-formal pieces that are delivered in garment bags must be returned with their original packaging.
<br />
<br />
<h6 id="rehf6">Items not Allowed for Exchange: </h6> Articles purchased on discount or on sale are not qualified for exchange. Note: For sale orders, exchanges will only be provided for valid reasons.</p>
<br /> <br /> <br /> <br />
<h4 id="ref30">International Orders:</h4>
<h6 id="rehf7">Currently, We not have an Exchange/Return policy for international orders. However, if you were delivered an incorrect or damaged item then please contact our customer care department for further help.

    

</h6>
<br /> <br />

<h2 id="ref1">ORDER CANCELLATION</h2>

<li id="ref7">Customers can cancel orders at any time before the order has been processed.</li>
<li id="ref7">Once the order has been shipped, you will receive a shipping confirmation via email with your COD amount as well as order tracking ID. As soon as the product has been delivered, our above-mentioned exchange policy will be applicable to your order.</li>
<li id="ref7">Brandstorepk holds the authority to cancel any order in cases, such as; the item is out of stock, pricing errors, or the credit card payment declined by the issuing financial institution.</li>

</div>

<div className="row" style={{Height:"200px", marginTop:"-240px"}} >
                <Footer/>
           </div>
</div>


)
    }


export default Refund;