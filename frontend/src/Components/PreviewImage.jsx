import React from 'react'

const PreviewImage = ({file}) => {
    const [preview, setPreview]= React.useState(null);
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = ()=>{
        setPreview(reader.result);
    };
    return (
    <div>
{ preview ? <img src={preview} alt="preview" width="500px" height="500px" />:""}

    </div>
  );
};

export default PreviewImage;