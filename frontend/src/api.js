import axios from 'axios';
const url= "http://localhost:5000/ecommerce";

export const AddItem = async (ItemData) => {
    return await axios.post (`${url}/AddItem`, ItemData);
    
};

export const UpdateItem= async (ItemData) => {
    return await axios.put (`${url}/UpdateItem`, ItemData);
};

export const DeleteItem= async (ItemData) => {
    return await axios.delete (`${url}/DeleteItem/${ItemData.ItemId}`)
};

export const GetItem = async () => {
    return await axios.get(`${url}/ViewItem`);
};

