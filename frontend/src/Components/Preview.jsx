import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import { Table } from "react-bootstrap";
import Navbar1 from "./Navbar1";
import Navbar from "./Navbar";



function Preview() {
  let location = useLocation();
  let data=location.state
  console.log(location.state);

  return (



    <div >


      <div className="row" style={{Height:"200px"}} >
        <Navbar1/>
           </div>
      <div className="row" style={{Height:"210px"}} >
                <Navbar/>
           </div>

           <h1 id="H1p2">Messages</h1>
           <br />
           <br />

           <Table id="tab" striped bordered hover size="md">
  <thead>
    <tr>
      <th>Name</th>
      <th>Phone No</th>
      <th>Date</th>
      <th>Messages</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data.name}</td>
      <td>{data.phone}</td>
      <td>{data.date}</td>
      <td>{data.about}</td>
    </tr>
  </tbody>
</Table>
    

    <div className="row" style={{Height:"200px", marginTop:"95px"}} >
                <Footer/>
           </div>
    </div>
  );
}
export default Preview;


