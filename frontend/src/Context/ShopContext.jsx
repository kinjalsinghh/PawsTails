import React,{createContext, useEffect, useState} from "react";
import axios from 'axios'
export const ShopContext=createContext(null);

const getDefaultCart=()=>{
        const cart={};
        for(let i=0;i<=300;i++){
            cart[i]=0;
        }
        return cart;
}

const getDefaultCartType=()=>{
    const cart={};
    for(let i=0;i<300+1;i++){
        cart[i]=""
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const [cartType, setCartType]=useState(getDefaultCartType())
    const [all_product, setAll_product]=useState([])
    const [cartItems,setCartItems]=useState(getDefaultCart())

    useEffect(()=>{
      axios.get('https://pawstails-backend.onrender.com/allproducts')
      .then((res)=>{
        setAll_product(res.data)
      })
      if(localStorage.getItem('auth-token')){
        axios.get('https://pawstails-backend.onrender.com/getcart',{headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json',
            'auth-token':`${localStorage.getItem('auth-token')}`
        }}).then((res)=>{
            setCartItems(res.data.cartData)
            setCartType(res.data.cartType)/// new
        })
    }},[])

    const addToCart=async (itemId,quantity,select)=>{
        // setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+Number(quantity)}))
        // setCartType((prev)=>({...prev,[itemId]:select}))
        if(localStorage.getItem('auth-token')){
            await axios.post('https://pawstails-backend.onrender.com/addtocart',{itemId:itemId,cartType:select,quantity:quantity},{  // converted 'itemId' to itemID
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                }
            })
            .then((res)=>{
                if(res.data.success===false){
                    console.log(res.data.message)
                }else{
                    setCartItems(res.data.cartData);
                    setCartType(res.data.cartType);
                }
            })
        }else{
            window.location.replace('/login')
        }
    }
    const removeFromCart=async (itemId)=>{
        // setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            await axios.post('https://pawstails-backend.onrender.com/removefromcart',{itemId:itemId},{
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                }
            })
            .then((res)=>{
                if(res.data.success===false){
                    console.log(res.data.message)
                }else{
                    setCartItems(res.data.cartData);
                    setCartType(res.data.cartType);
                }
            })
        }
    }
    let TotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item));
                const type=cartType[item]
                if(type==='small'){
                    totalAmount+=itemInfo.new_price*0.5*cartItems[item]
                }else if(type==='medium'){
                    totalAmount+=itemInfo.new_price*0.75*cartItems[item]
                }else if(type==='large'){
                    totalAmount+=itemInfo.new_price*cartItems[item]
                }    
            }
        }
        return totalAmount
    }
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(let item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item]
            }
        }
        return totalItem;
    }
    const contextValue={getTotalCartItems,TotalCartAmount,all_product,cartItems,addToCart,removeFromCart,cartType};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
