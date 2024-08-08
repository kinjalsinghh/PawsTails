import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../Context/ShopContext"
import Productdisplay from "../Components/Productdisplay/Productdisplay";
import TopOfProduct from "../Components/TopOfProduct/TopOfProduct";
import Description from "../Components/Description/Description";
import RelatedProduct from "../Components/RelatedProducts/RelatedProducts";
function Product(){
    const {all_product}=useContext(ShopContext)
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId))
    return(
        <div>
            <TopOfProduct product={product}/>
            <Productdisplay product={product}/>
            <RelatedProduct product={product}/>
        </div>
    )
}
export default Product