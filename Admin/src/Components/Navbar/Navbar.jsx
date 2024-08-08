import logo from '../../assets/logo.png'
import profile from '../../assets/profile-icon.png'
import './Navbar.css'
function Navbar(){
    return(
        <div className="admin-navbar">
           <img src={logo} className='admin-logo'/>
           <img src={profile} className='admin-profile'/>
        </div>
    )
}
export default Navbar