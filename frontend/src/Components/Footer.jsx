import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      
        <div className="row">
          <div id="f-1-col-1" className="col-4">
            <ul>
              <h3 style={{color:"maroon", marginLeft:"110px", marginTop:"-10px", fontSize:"22px",  fontFamily:"Montserrat"}}>Services</h3>
            
              <Link id="L-2" to="/Refund">
                <li>
                  <i id="f-1-icon" class="bi bi-arrow-repeat"></i>Exchange &
                  Refunds
                </li>
              </Link>
              <Link id="L-2" to="/Shipping">
                <li>
                  <i id="f-1-icon" class="bi bi-truck"></i>Shipping & Delivery
                </li>
              </Link>
              <Link id="L-2" to="/Orders">
                {" "}
                <li>
                  <i id="f-1-icon" class="bi bi-box2-fill"></i>Orders
                </li>
              </Link>
            </ul>
          </div>
          <div id="f-1-col-1" className="col-4">
          
            <ul>
            <h3 style={{color:"maroon", marginLeft:"110px", marginTop:"-8px", fontSize:"22px", fontFamily:"Montserrat"}}>Policies</h3>
              <Link id="L-2" to="/Privacy">
                <li>
                  <i id="f-1-icon" class="bi bi-shield-shaded"></i>Privacy
                  Policy
                </li>
              </Link>
              <Link id="L-2" to="/Terms">
                <li>
                  <i id="f-1-icon" class="bi bi-archive-fill"></i>Terms &
                  Services
                </li>
              </Link>
              <Link id="L-2" to="/Terms">
                <li>
                  <i id="f-1-icon" class="bi bi-archive-fill"></i>Note to
                  Customers
                </li>
              </Link>
              <h3 style={{color:"white", fontSize:"17px", marginTop:"90px", marginLeft:"110px"}}>© 2022 Copyright: Stitchclick.com</h3>
            </ul>
          </div>
          
          <div id="f-1-col-2" className="col-4">
            <p id="col-2-p1" style={{marginTop:"-22px", fontSize:"26px", color:"maroon", fontFamily:"Montserrat" }}>Our Social Media Accounts</p>
            <i id="col-2-i" class="bi bi-facebook"></i>
            <i id="col-2-i2" class="bi bi-instagram"></i>
            <i id="col-2-i2" class="bi bi-twitter"></i>
            <i id="col-2-i2" class="bi bi-youtube"></i>
            
          </div>

          
        </div>
      </div>
    
  );
}
export default Footer;
