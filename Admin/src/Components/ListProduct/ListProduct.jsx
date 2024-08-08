import { useEffect, useState } from 'react';
import axios from 'axios'
import './ListProduct.css'
function ListProduct(){
    const [allProducts,setAllProducts]=useState([])
    const  getListOfProducts=async ()=>{
        await axios.get('http://localhost:5050/allproducts')
        .then((res)=>setAllProducts(res.data))
    }
    const deleteProduct=async (id)=>{
        await axios.post('http://localhost:5050/removeproduct',{id:id})
        getListOfProducts();
    }
    useEffect(()=>{
        getListOfProducts()
    },[])
    return(
        <div className="listproduct">
            <h1>List All Products</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                {
                    allProducts.map((product,index)=>{
                        return <><div key={index} className='listproduct-format-main listproduct-format'>
                           <img src={product.image} className='listproduct-image-icon'/>
                           <p>{product.name}</p>
                           <p>INR {product.old_price}</p>
                           <p>INR {product.new_price}</p>
                           <p>{product.category}</p>
                           <button onClick={()=>{deleteProduct(product.id)}}>Remove</button>
                        </div>
                        </>
                    })
                }
            </div>
        </div>
    )
}
export default ListProduct;