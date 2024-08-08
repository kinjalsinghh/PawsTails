import { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import Dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item';
function ShopCategory(props){
    const {all_product}=useContext(ShopContext)
    return(
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner}/>
            <div className="shopcategory-indexsort">
                <p>
                    <span>Showing possible results</span>
                </p>
            </div>
            <div className="shopcategory-products">
                {
                    all_product.map((item,i)=>{
                        if(props.category===item.category){
                            return <Item key={i} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        }
                        else{
                            return null
                        }
                    })
                }
            </div>
        </div>
    )
}
export default ShopCategory