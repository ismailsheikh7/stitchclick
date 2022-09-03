import React, { useEffect } from "react";
import { useState } from "react";
import { GetItem } from "../api";
import { useCart } from "react-use-cart";
const Cart = () => {
    
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,  
    } = useCart();

    const [ItemData, setItemData] = useState([]);

    useEffect(()=> {
        ViewItemss();
    })

    const ViewItemss = async () => {
        const recieved = await GetItem();
        setItemData(recieved.data)
    }


    if (isEmpty) return 

    return (
        
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5 id="carth5">Cart ({totalUniqueItems}) <br/> Total Items:({totalItems})</h5>
                    <table className="table table-danger table-hover n-4">
                        <tbody>
                            {
                                items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.img} style={{ height: "350px", width: '250px' }} />
                                            </td>
                                            <td id="cartdata">{item.title}</td>
                                            <td id="cartdata">{item.price} Rs</td>
                                            
                                            <td id="cartdata">Quantity ({item.quantity})</td>
                                            <td>
                                                <button id="remove1"
                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                >-</button>
                                                <button id ="remove1"
                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                >+</button>
                                                <button id="remove"
                                                    onClick={() => removeItem(item.id)}
                                                >Remove Item</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div id="totalprice">
                        <h2>Your Total Price: Rs {cartTotal}</h2>
                    </div>
                    <div className="col-auto">
                            <button id="remove"
                            onClick={emptyCart}
                            >
                            Clear Cart
                            </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cart;
    