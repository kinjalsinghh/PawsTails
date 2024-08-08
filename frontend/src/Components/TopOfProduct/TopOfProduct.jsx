import './TopOfProduct.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

function TopOfProduct(props){
    const {product}=props
    return(
       <div className='topof'>
          HOME <img src={arrow_icon}/> PRODUCTS <img src={arrow_icon}/> {product.category}<img src={arrow_icon}/>{product.name}
       </div>
    )
}
export default TopOfProduct