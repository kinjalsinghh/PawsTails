const userModel=require("../Model/Users")
const Users=userModel.Users
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');

exports.usersignup=async(req,res)=>{

    let check=await Users.findOne({email:req.body.email});
    if(check){
        return res.json({success:false, error:"Existing Email"})
    }
    let cart={};
    for(let i=0;i<300;i++){
        cart[i]=0;
    }
    let carttype={};
    for(let i=0;i<300;i++){
        carttype[i]="";
    }

    const User=new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
        cartType:carttype
    })
    await User.save()
    const token=jwt.sign({email:User.email},'paws&tailsuser')
    res.json({
        success:true,
        token
    })
}
exports.userlogin=async(req,res)=>{

    const user=await Users.findOne({email:req.body.email})
    if(user){
        if(req.body.password===user.password){
            const token=jwt.sign({email:user.email},'paws&tailsuser');
            return res.json({success:true,token})
        }else{
           return res.json({success:false,error:"Wrong Password Entered"})
        }
    }else{
        return res.json({success:false,error:"Account not found"})
    }
}
exports.forgotpass=async (req,res)=>{
    console.log(req.body)
    const email=req.body.email;
    let user=await Users.findOne({email:email});
    if(!user){
     return res.send({success:false})
    }
    else{ const token=jwt.sign({email:email},'paws&tailsuser',{expiresIn:'15m'});
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure:true,
            auth: {
              user: 'pawstails78@gmail.com',
              pass: 'grsauvmdsnvruykv'
            }
          });
          
          var mailOptions = {
            from: 'pawstails78@gmail.com',
            to: email,
            subject: 'Reset Password',
            text: "Forget your password?",
            html:`<h2>Greetings from Paws&Tails!</h2><p>\
          <h3>Hello</h3>\
          Kindly please reset your password by clicking on below link (valid for 15 minutes). Please make sure to reset your password before the link expires.<br/>\
          <a href='https://pawstails.netlify.app/resetpassword/${user._id}/${token}' >Click On This Link</a>\
          </p>`,
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              return res.send({success:true,message:'Reset password link sent on your email!.'})
            }
          });
    }}
    exports.resetpass=async (req,res)=>{
        const {id,token}=req.params;
        const password=req.body.pass;
        if(!password){
            return res.send({success:false,message:"Please provide a password"})
        }else{
            const user=await Users.findOne({_id:id});
            if(!user){
               res.send({success:false,message:"User not verified"})
            }else{
               const decode=jwt.verify(token,'paws&tailsuser');
               let user=await Users.findOne({email:decode.email})
               if(user){
                 const success=await Users.findByIdAndUpdate(user._id,{
                    $set:{
                        password:password
                    }
                 })
                 if(success){
                    res.send({success:true,message:"Password changed"})
                 }
               }else{
                res.send({sucess:false,message:'Token not verified'})
               }
            }
            
        }
    }
