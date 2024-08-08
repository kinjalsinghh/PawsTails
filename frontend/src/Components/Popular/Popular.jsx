import './Popular.css'
import axios from 'axios'
import Item from '../Items/Item'
import { useEffect, useState } from 'react'
function Popular(){
  const [data_product,setData_product]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5050/bestsellers')
    .then((res)=>{
      setData_product(res.data)
    })
  },[])
    return(
        <div className='popular'>
        <h1>OUR BESTSELLERS</h1>
        <hr/>
        <div className='popular-item'>
          {data_product.map((item,i)=>{
            return <Item key={i} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
        </div>
    )
}
export default Popular;