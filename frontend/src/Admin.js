import React, { Component, useEffect, useState } from 'react';
import { DeleteItem, GetItem } from './api';
import { Link } from 'react-router-dom';
import Navbar1 from './Components/Navbar1';

const Admin = () => {
    
    const [ItemData, setItemData] = useState([]);

    useEffect(()=> {
        ViewItemss();
    })

    const ViewItemss = async () => {
        const recieved = await GetItem();
        setItemData(recieved.data)
    }

    const DeleteItemss = async (ItemId) => {
        const ItemData = { ItemId : ItemId};
        await DeleteItem(ItemData)
    }
    
    
    return ( 


        <div>
    <div className="row" style={{Height:"200px"}} >
    <Navbar1/>
       </div>

       <h1 id="H1p2" style={{paddingLeft:"20px"}}>Admin Panel</h1>


        
        <div className='col-md-8 position-absolute start-50 translate-middle-x mt-5'>
            <table className='table'>
                <thead>
                    <th scope='col' > Item ID</th>
                    <th scope='col'> Item Name</th>
                    <th scope='col'> Item Description</th>
                    <th scope='col'> Item Price</th>
                    <th scope='col'> Item Image</th>
                    <th scope='col'> Apply Operations</th>

                </thead>

                <tbody> {ItemData.map((Y) =>  
                   <tr>
                   <td> {Y.ItemId}</td>
                    <td>{Y.ItemName}</td>
                    <td>{Y.ItemDescription}</td>
                    <td>{Y.ItemPrice}</td>
                    <td>{Y.ItemImage}</td>
                    <td>
                        <Link to='/UpdateItem'> <button  id="btnform2"> Update </button> </Link>
                        <br></br>
                        <button id="btnform1" onClick={(e)=> DeleteItemss(Y.ItemId)}> Delete </button> 
                    </td>
                    </tr>
                    )
                }
                    </tbody>
            
            </table>

            <Link to="/AddItem"> <button id="btnform3"> Add New</button></Link>
      
        </div>
        </div>
     );
}
 
export default Admin;