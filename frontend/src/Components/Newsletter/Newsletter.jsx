import { useState } from 'react'
import './Newsletter.css'
function Newsletter(){
    function subscribed(){
        alert("Thanks For subscribing!")
    }
    const [input,setInput]=useState('');
    return(
        <div className='newsletter'>
          <h1>Get offers on your email</h1>
          <p>Subscribe to our newsletter and stay updated</p>
          <div>
            <input onChange={(e)=>setInput(e.target.value)} type="email" placeholder='Enter e-mail'/>
            <button onClick={subscribed}>Subscribe</button>
          </div>
        </div>
    )
}
export default Newsletter