import './NewProducts.css'
import Item from '../Items/Item'
import axios from 'axios'
import { useEffect, useState } from 'react'
function NewProducts(){
    const [new_products,setNew_products]=useState([])
    useEffect(()=>{
        axios.get('https://pawstails-backend.onrender.com/newproducts')
        .then((res)=>{
            setNew_products(res.data)
        })
    },[])
    return(
        <div className='newProducts'>
           <h1>NEW ARRIVALS</h1>
           <hr/>
           <div className='new-items'>
           {new_products.map((item,i)=>{
            return <Item key={i} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
           })}
           </div>     
        </div>
    )
}
export default NewProducts
