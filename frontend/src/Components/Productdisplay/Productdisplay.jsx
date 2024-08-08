import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
function Productdisplay(props){
    
    const {product}=props
    const {addToCart}=useContext(ShopContext)
    const [price, setPrice]=useState(product.new_price)
    const [oprice, setOprice]=useState(product.old_price)
    const [quantity, setQuantity]=useState()
    const [select,setSelect]=useState("medium")
    
    function button_func(e){
        if(e==='small'){
            setPrice(0.5*product.new_price)
            setOprice(0.5*product.old_price)
            setSelect("small")
            alert("Small selected. (Note: The price will be changed due to selection of a different size)")
        }
        else if(e==='medium'){
            setPrice(0.75*product.new_price)
            setOprice(0.75*product.old_price)
            setSelect("medium")
            alert("Medium selected. (Note: The price will be changed due to selection of a different size)")
        }
        else if(e==='large'){
            setPrice(product.new_price)
            setOprice(product.old_price)
            setSelect("large")
            alert("Large selected. (Note: The price will be changed due to selection of a different size)")
        }
    }
    
    return(
        <div className='productdisplay'>
           <div className='productdisplay-left'>
              <div className='productdisplay-img-list'>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
              </div>
              <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image}/>
              </div>
           </div>
           <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_dull_icon}/>
                </div>
                <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-new">INR {price}</div>
                    <div className="productdisplay-right-prices-old">INR {oprice}</div>
                    
                </div>
                <div className="productdisplay-right-size">
                    <h2>Select size</h2>
                    <div className="productdisplay-right-sizes">
                        <button  onClick={()=>button_func("small")} >Small</button>
                        <button  onClick={()=>button_func("medium")} >Medium</button>
                        <button onClick={()=>button_func("large")}>Large</button>
                    </div>
                </div>
                <div className='productdisplay-right-quantity'>
                    <h2>Quantity:</h2>
                    <select className='productdisplay-right-quantity-select' name="quantity" onChange={(e)=>setQuantity(e.target.value)}>
                        <option value="select">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className='addtocart'>
                <button onClick={()=>addToCart(product.id,quantity,select)}>Add to Bag</button>
                </div>
                <div className='productdisplay-right-description'>
                    <p>{product.description}</p>
                </div>
                
                <div className="productdisplay-right-category"><span>Category:</span>{product.category}</div>
                <div className="productdisplay-right-category"><span>Tags:</span>Latest,Dogs favorite</div>
           </div>
        </div>
    )
}
export default Productdisplay