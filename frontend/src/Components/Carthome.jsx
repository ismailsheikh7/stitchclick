import React from "react";
import Itemcart from "./Itemcart";      
import { GetItem } from "../api";
import { useState } from "react";
import { useEffect } from "react";
const Carthome = () => {
    const [ItemData, setItemData] = useState([]);

    useEffect(()=> {
        ViewItemss();
    })

    const ViewItemss = async () => {
        const recieved = await GetItem();
        setItemData(recieved.data)
    }
    
    return(
        <>
            <h1  id="Carthomeh1">LUXURY PRET</h1>
            <section className="py-2 container">
                <div className="row justify-content-center">
                    {ItemData.map((data, index)=> {
                        return(
                            <Itemcart
                            img={data.ItemImage}
                            title={data.ItemName}
                            desc={data.ItemDescription}
                            price={data.ItemPrice}
                            item={data.ItemId}
                            item1={data}
                            key ={index}
                            />
                        )
                    })}
                   
                   
                </div>

            </section>
        </>
    )       
}
export default Carthome;