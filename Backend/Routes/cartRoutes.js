const express=require('express')
const cartRouter=express.Router();
const jwt=require('jsonwebtoken')
const cartController=require('../Controllers/cartController')
/// middleware to fetch tokens
const getUser=(req,res,next)=>{
    const token=req.header('auth-token')
    console.log(token)
    if(!token){
        return res.send({success:false})
    }else{
        try{
           const data=jwt.verify(token,'paws&tailsuser')
           req.email=data.email
           next()
        }catch(err){
          return res.send({errors:"Please authenticate using valid token"})
        }
    }
}
cartRouter.post('/addtocart',getUser,cartController.addtocart)
cartRouter.post('/removefromcart',getUser,cartController.removefromcart)
cartRouter.get('/getcart',getUser,cartController.getcartdata)
exports.router=cartRouter;