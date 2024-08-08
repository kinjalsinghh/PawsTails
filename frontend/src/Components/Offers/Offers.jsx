import './Offers.css'
import exclusive_img from '../Assets/exclusive_img.png'
function Offers(){
    return(
<div className="offers">
        <div className="offers-left">
           <h1>Get your pet essentials now</h1>
           <h1>Offers for you</h1>
           <p>Only on bestseller products</p>
        </div>
        <div className="offers-right">
           <img src={exclusive_img}/>
        </div>
</div>
    )
}
export default Offers