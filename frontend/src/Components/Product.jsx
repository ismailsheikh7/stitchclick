import React from 'react';
import { CartProvider } from "react-use-cart"
import Cart from './Cart';
import Carthome from './Carthome';
import Footer from './Footer';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';


const Product =()=> {
    return(
        <div className='container-fluid'>
            <Navbar1></Navbar1>
            <Navbar></Navbar>
            <CartProvider>
            <Carthome/>
            <Cart/>
            </CartProvider>
            <Footer></Footer>
        </div>
    )
    }
    export default Product;