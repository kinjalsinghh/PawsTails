import { Link } from 'react-router-dom'
import addproduct_icon from '../../assets/addproduct_icon.png'
import listproduct_icon from '../../assets/listproduct_icon.png'
import './Sidebar.css'
function Sidebar(){
    return(
        <div className="sidebar">
           <Link to={'/addproduct'} style={{textDecoration:'none'}}>
            <div className="sidebar-item">
                <img src={addproduct_icon}/>
                <p>Add a Product</p>
            </div>
           </Link>
           <Link to={'/listproduct'} style={{textDecoration:'none'}}>
            <div className="sidebar-item">
                <img src={listproduct_icon}/>
                <p>List a Product</p>
            </div>
           </Link>
        </div>
    )
}
export default Sidebar