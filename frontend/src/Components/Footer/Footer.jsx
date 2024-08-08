
import twitter from '../Assets/twitter.png'
import insta from '../Assets/instagram.png'
import whatsapp from '../Assets/whatsapp.png'
import logo from '../Assets/logo_big.png'
import facebook from '../Assets/facebook.png'
import send from '../Assets/filled.png'
import { Link } from 'react-router-dom'
//import send from '../Assets/filled.png'
import './Footer.css'
function Footer(){
    return(
        <div className="footer">
            <div className="footer-contents">
            <div className="footer-content1">
                <p>Lets Connect There</p>  
            </div>
            <hr/>
           <div className="footer-content2">
               <div className="footer-content2-1">
                <div className="footer-logo">
                    <img src={logo}/>
                    <p>paws&tails</p>
                </div>
                <div className="footer-content2-1-text">
                    <p>Get your pet essentials now with paws&tails!.<br/> For any queries or feedback kindly please contact us<br/>on the details provided.</p>
                </div>
                <div className="footer-content2-1-socialmedia">
                    
                    <img src={twitter}/>
                    <img src={insta}/>
                    <img src={whatsapp}/>
                    <img src={facebook}/>
            
                </div>
               </div>
               <div className="footer-content2-2">
        
                    <p className="footer-content2-heading">Navigation</p>
                    <Link to='/' style={{textDecoration:'none'}}><p className='footer-content2-2-points'> Home</p></Link>
                    <Link to='/' style={{textDecoration:'none'}}><p className='footer-content2-2-points'> About</p></Link> 
                    <Link to='/supplements' style={{textDecoration:'none'}}><p className='footer-content2-2-points'> Supplements</p></Link>
                    <Link to='/accessories' style={{textDecoration:'none'}}><p className='footer-content2-2-points'> Accesssories</p></Link>
                    <Link to='/hygine' style={{textDecoration:'none'}}><p className='footer-content2-2-points'> Hygine</p></Link>
               </div>
               <div className="footer-content2-3">
               <p className="footer-content2-heading">Contact</p>
                    <p className='footer-content2-2-points'>+5689-7896-254</p>
                    <p className='footer-content2-2-points'>paws&tails78@gmail.com</p>
                    <p className='footer-content2-2-points'>Express view apartments,Sector-93,Noida</p>
               </div>
           </div>
           <hr/>
           <div className="footer-content3">
            <p>Copyright© 2024 paws&tails</p>
            <p>User Terms & Conditions | Privacy Policy</p>
           </div>
           </div>
        </div>


    )
}
export default Footer;