import React from "react";

import {useCart} from "react-use-cart";

const Itemcart = (props) => {

    const { addItem } = useCart();

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" id="itemcart">
            <div class="card p-0 overflow-hidden h-100 shadow" >
                <img src={props.img} class="card-img-top img-fluid " id="imgcart" alt=""/>
                    <div class="card-body text-center">
                        <h5 class="card-title" id="itemcarth5">{props.title}</h5>
                        <h5 class="card-title" id="itemcarth5"> Rs {props.price}</h5>
                        <p class="card-text" id="itemcarth5">{props.desc}</p>
                        <button id="itemcarth15" 
                        onClick={() => addItem(props.item)}>Add to Cart</button>
                    </div>
            </div>
        </div>
    )

}

export default Itemcart;