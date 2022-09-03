
import { Link } from 'react-router-dom';
function Navbar() {

    return (
      <div id="nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-white ">
   
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <a className="nav-item nav-link " style={{marginLeft:"470px", fontSize:"18px", borderBlockStartWidth:"20px"}}> <Link className=' style_link' to="/"><a>Home</a></Link></a>
        <a className="nav-item nav-link" style={{fontSize:"18px"}}> <Link className=' style_link'to="/Product"><a>Products</a></Link></a>
        <a className="nav-item nav-link" style={{fontSize:"18px"}}><Link className=' style_link' to="/ContactUs"><a>Contact Us</a></Link></a>
        <a className="nav-item nav-link" style={{fontSize:"18px"}}> <Link className=' style_link'to="/AboutUs"><a>About Us</a></Link></a>
        <a className="nav-item nav-link" style={{fontSize:"18px"}}> <Link className=' style_link'to="/Faqs"><a>Faqs</a></Link></a>
        <a className="nav-item nav-link" style={{fontSize:"18px"}}> <Link className=' style_link'to="/SignIn"><a>Login</a></Link></a>
        <a className="nav-item nav-link" style={{fontSize:"18px"}}> <Link className=' style_link'to="/SignUp"><a>Register</a></Link></a>

      </div>
    </div>
  </nav> 

  </div>
    )
}

export default Navbar;