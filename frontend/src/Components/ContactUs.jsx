import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";
import KErrorMessage from "./KErrorMessage";
import Navbar1 from "./Navbar1";




const validationSchema = yup.object({
  name: yup.string().required("Name is required!"),
  phone: yup.number().min(10, "Not valid number").max(100000000000, "Not valid number").required("Phone is required!"),
  date: yup.date().required("date is required"),
  about: yup.string().required("Message cannot be empty"),
});

const ContactUs = () => {
  const navigate = useNavigate();
  const fileRef = useRef(null);
  return (
    <div className='container-fluid' >
      <div className="row" style={{Height:"200px"}} >
        <Navbar1/>
           </div>
      <div className="row" style={{Height:"200px"}} >
                <Navbar/>
      </div>

        <h1 id="H1p2" style={{paddingLeft:"45px"}}>Contact Us</h1>
      
      <div id="form" >
    <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          phone: "",
          date: "",
          about: "",      
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 100));
          console.log(values);
          navigate("/preview", { state: values });
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <label id="formName">Name:</label>
            <br />
            <Field id="formName1" name="name" type="text" />
            <KErrorMessage name="name" />

            <label id="formName">Phone:</label>
            <br />
            <Field id="formName1" name="phone" type="number" />
            <KErrorMessage name="phone" />

            <label id="formName">Date:</label>
            <br />
            <Field id="formName1" name="date" type="date" />
            <KErrorMessage name="date" />

            <label id="formName">Message:</label> 
            <br />
            <Field id="formName1" name="about" as="textarea" /> 
            <KErrorMessage name="about" /> 

      
            <button id="btnform" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      </div>
      <div id="footerContact">
                <Footer/>
           </div>
    </div>
  );
};
export default ContactUs;
