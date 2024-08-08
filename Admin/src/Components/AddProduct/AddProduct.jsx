import './AddProduct.css'
import upload from '../../assets/upload-image-icon.png'
import { useState } from 'react'
import axios from 'axios'
function AddProduct(){
    const [image,setImage]=useState(false);
    const [productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"hygine",
        old_price:"",
        new_price:""
    })
    const imageHandler=(e)=>{
        setImage(e.target.files[0]);
    }
    const changeHandler=(e)=>{
       setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_Product=async()=>{
        console.log(productDetails)
        let product=productDetails;
        let response;
        let formData=new FormData();
        formData.append('product',image);
        await axios.post('http://localhost:5050/upload',formData)
        .then((res)=>{
            response=res.data
        })
        if(response.success){
            product.image=response.image_url;
            await axios.post('http://localhost:5050/addproduct',product)
            .then((res)=>res.data.success?alert('Product Added'):alert('Failed'));
        }
    }
    return(
        <div className="addproduct">
           <div className="addproduct-field">
            <p>Product Title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Add Title'/>
           </div>
           <div className="addproduct-price">
           <div className="addproduct-field">
            <p>Old Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Enter old price'/>
           </div>
           <div className="addproduct-field">
            <p>New Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Enter new price'/>
           </div>
           </div>
           <div className="addproduct-field">
            <p>Category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-select-category'>
                  <option value="supplement">Supplement</option>
                  <option value="accessories">Accessories</option>
                  <option value="hygine">Hygine</option>
            </select>
           </div>
           <div className="addproduct-field">
             <label htmlFor='file-input'>
                  <img src={image?URL.createObjectURL(image):upload} className='product-thumbnail-image'/>
             </label>
             <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
           </div>
           <button onClick={Add_Product}>ADD PRODUCT</button>
        </div>
    )
}
export default AddProduct