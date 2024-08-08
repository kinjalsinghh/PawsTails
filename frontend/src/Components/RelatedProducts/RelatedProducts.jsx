import Item from '../Items/Item'
import './RelatedProducts.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
function RelatedProduct(props){
    const [related_products,setRelated_products]=useState([])
    useEffect(()=>{
        axios.get('https://pawstails-backend.onrender.com/bestsellers')
        .then((res)=>{
            setRelated_products(res.data)
        })
    },[])
    return(
        <div className='relatedproducts'>
            <hr style={{border:"none", background:"#efefef", height:"2px", width:"100%"}}/>
           <h1>Related products</h1>
           <hr/>
           <div className='relatedproducts-item'>
             {related_products.map((item,i)=>{
                
                    return <Item key={i} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                   
             })}
           </div>
        </div>
    )
}
export default RelatedProduct;
