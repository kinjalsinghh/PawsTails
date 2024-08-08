
import './App.css';
import Navbar from './Components/Navbaar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import supplement_bnner from './Components/Assets/supplement.png';
import accessories_bnner from './Components/Assets/accessories.png';
import hygine_bnner from './Components/Assets/hygine.png'
import Forgotpass from './Pages/Forgotpass';
import Resetpass from './Pages/Resetpass';
import Placeorder from './Components/Placeorder/Placeorder';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/supplements" element={<ShopCategory banner={supplement_bnner}  category="supplement"/>}/>
        <Route path="/accessories" element={<ShopCategory banner={accessories_bnner} category="accessories"/>}/>
        <Route path="/hygine" element={<ShopCategory banner={hygine_bnner} category="hygine"/>}/>
        <Route path="/order" element={<Placeorder/>}/>
        <Route path="/forgotpassword" element={<Forgotpass/>}/>
        <Route path="/resetpassword/:id/:token" element={<Resetpass/>} />
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
