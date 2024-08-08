const userModel=require("../Model/Users")
const Users=userModel.Users

exports.addtocart=async(req,res)=>{
    let userData=await Users.findOne({email:req.email})
    if(!userData){
        return res.send({success:false,message:"user not found"})
    }
    else{ userData.cartData[req.body.itemId]+=Number(req.body.quantity); // added qunatity instead of one
    userData.cartType[req.body.itemId]=req.body.cartType// new
    await Users.findOneAndUpdate({_id:userData._id},{cartData:userData.cartData,cartType:userData.cartType}) // new
    res.send({cartData:userData.cartData,cartType:userData.cartType})
    }
}
exports.removefromcart=async(req,res)=>{
    let userData=await Users.findOne({email:req.email})
    if(!userData){
        return res.send({success:false,message:"user not found"})
    }
    else{if(userData.cartData[req.body.itemId]>0){
        userData.cartData[req.body.itemId]-=1;
        if(userData.cartData[req.body.itemId]==0){
        userData.cartType[req.body.itemId]=="";
    }
    }
    await Users.findOneAndUpdate({_id:userData._id},{cartData:userData.cartData,cartType:userData.cartType})
    res.send({cartData:userData.cartData,cartType:userData.cartType})
}
}
exports.getcartdata=async(req,res)=>{
    let userData=await Users.findOne({email:req.email});
    if(userData){
        res.send({cartData:userData.cartData,cartType:userData.cartType}) // new
    }else{
        console.log('no data')
    }
    
}
