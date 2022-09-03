
import Header from './Header';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';
import Header1 from './Header1';
import Navbar1 from './Navbar1';
import Categories from './Categories';






function Layout(props) {

     function value(val){
       props.func(val);
     }
          
    return ( 
       <div className='container-fluid'>
            <div>
            <Link to="/Layout"></Link>
            <link to="/Preview"></link>
            <link to="/Faqs"></link>
            <Link to="/Login"></Link>
            <Link to="/register"></Link>
            <Link to="/Cart"></Link>
            

            </div>
            <div className="row" style={{Height:"200px"}} >
        <Navbar1/>
           </div>

            <div className="row" style={{Height:"200px"}} >
        <Navbar/>
           </div>
           <div className="row" style={{Height:"500px"}} >
                <Header1/>
           </div>

           <div className="row" style={{Height:"500px"}}>
                <Categories/>
           </div>
          
           <div className="row" style={{Height:"600px", marginTop:"-280px"}}>
                <Footer/>
           </div> 
           
           </div>

         
     );
    }

export default Layout;