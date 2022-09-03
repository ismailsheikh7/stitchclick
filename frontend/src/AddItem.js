import React, { Component } from "react";
import { useState } from "react";
import { AddItem } from "./api";
import Navbar1 from "./Components/Navbar1";


const AddItemm = () => {
  const [ItemName, setItemName] = useState();
  const [ItemId, setItemId] = useState();
  const [ItemPrice, setItemPrice] = useState();
  const [ItemDescription, setItemDescription] = useState();
  const [ItemImage, setItemImage] = useState();

  const AddItemss = async () => {
    const ItemData = {
      ItemName: ItemName,
      ItemId: ItemId,
      ItemPrice: ItemPrice,
      ItemDescription: ItemDescription,
      ItemImage: ItemImage,
    };
    console.log(ItemData)
    await AddItem(ItemData);
  };

  return (
<div>
    <div className="row" style={{Height:"200px"}} >
    <Navbar1/>
       </div>

       <h1 id="H1p2" style={{paddingLeft:"30px" }}>Add New Products</h1>
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      <label style={{color:"maroon",  fontFamily: "Montserrat"}}  className="mb-2">
            Item Name
      </label>
      <input className="form-control mb-3" type="text" name="ItemName" onChange={(e) => setItemName (e.target.value)}>

      </input>

      
      <label  style={{color:"maroon",  fontFamily: "Montserrat"}} className="mb-2">
            Item ID
      </label>
      <input className="form-control mb-3" type="number" name="ItemId" onChange={(e) => setItemId (e.target.value)}>
        
      </input>

      <label style={{color:"maroon",  fontFamily: "Montserrat"}} className="mb-2">
            Item Price
      </label>
      <input className="form-control mb-3" type="number" name="ItemPrice" onChange={(e) => setItemPrice (e.target.value)}>
        
      </input>
      <label  style={{color:"maroon",  fontFamily: "Montserrat"}} className="mb-2">
            Item Description
      </label>
      <input className="form-control mb-3" type="text" name="ItemDescription" onChange={(e) => setItemDescription (e.target.value)}>
        
      </input>

      <label  style={{color:"maroon",  fontFamily: "Montserrat"}} className="mb-2">
            Item Image
      </label>
      <input className="form-control mb-3" type="text" name="ItemImage" onChange={(e) => setItemImage (e.target.value)}>
        
      </input>



      <button  id="btnform4" onClick={AddItemss}> Add Item</button>
    </div>
    </div>
  );
};

export default AddItemm;
