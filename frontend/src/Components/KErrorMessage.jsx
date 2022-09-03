import React from 'react'
import {ErrorMessage} from "formik";
const KErrorMessage = ({name}) => {
  return (
<div style={{color: "red", marginLeft:"730px"}}>
<ErrorMessage name={name}  />

</div>
  );
  }
export default KErrorMessage;