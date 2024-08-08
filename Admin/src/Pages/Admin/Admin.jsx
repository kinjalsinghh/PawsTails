import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Admin.css'
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';

function Admin(){
    return(
        <div className="admin">
            <Sidebar/>
            <Routes>
                <Route path='/addproduct' element={<AddProduct/>}></Route>
                <Route path='/listproduct' element={<ListProduct/>}></Route>
            </Routes>
        </div>
    )
}
export default Admin;