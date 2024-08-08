import { useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import './CSS/Resetpass.css'
function Resetpass(){
    const [password,setPassword]=useState("");
    const {id,token}=useParams()
    const handlecontinue=async ()=>{
        await axios.post(`https://pawstails-backend.onrender.com/resetpassword/${id}/${token}`,{pass:password})
        .then((res)=>{
            console.log(res)
            if(res.data.success===true){
                window.location.replace('/login')
            }else{
                alert(res.data.message)
            }
        })
    }
    return(
        <div className="resetpass">
            <div className="resetpass-container">
                <h1>Reset Password</h1>
                <div className="resetpass-fields">
                   <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Enter password"/>
                </div>
                <button onClick={handlecontinue}>Continue</button>
            </div>
        </div>
    )
}
export default Resetpass;
