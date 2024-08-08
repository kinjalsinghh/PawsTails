import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import menu_icon from '../Assets/menu_icon.png'
function Navbar(){
    const [menu,setMenu]=useState("home")
    const {getTotalCartItems}=useContext(ShopContext);
    const menuref=useRef()
    const dropdown=(e)=>{
        menuref.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
    return(
        <div className='navbar'>
            <div className='nav-logo'>
               <Link to='/'><img src={logo} alt=""/></Link> 
                <Link to='/' style={{textDecoration:'none'}}><p>paws&tails</p></Link>
            </div>
            <img className="nav-dropdown" onClick={dropdown} src={menu_icon}/>
            <ul ref={menuref} className='nav-menu'>
               <li onClick={()=>setMenu('home')}><Link style={{textDecoration:"none"}} to="/">Home</Link>{menu==='home'?<hr/>:<></>}</li>
               <li onClick={()=>setMenu('supplement')}><Link style={{textDecoration:"none"}} to="/supplements">Supplements</Link> {menu==='supplement'?<hr/>:<></>} </li>
               <li onClick={()=>setMenu('accessories')}><Link style={{textDecoration:"none"}} to="/accessories">Accessories</Link> {menu==='accessories'?<hr/>:<></>} </li>
               <li onClick={()=>setMenu('hygine')}><Link style={{textDecoration:"none"}} to="/hygine">Hygine</Link> {menu==='hygine'?<hr/>:<></>}</li>
               
            </ul>
            <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/login')}}>Logout</button>:<Link to="/login"><button>Login</button></Link>}
             
             <Link to="/cart"><img src={cart_icon}/></Link>
             <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
            
        </div>
    )
}
export default Navbar