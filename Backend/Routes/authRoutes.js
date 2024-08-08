const express=require('express')
const authRouter=express.Router();
const authController=require('../Controllers/authControllers')
const Joi=require('joi');
const passwordComplexity=require('joi-password-complexity');

const signupValidate = (req,res,next) => {
    const schema = Joi.object().keys({
      name:Joi.string().required(),
      email: Joi.string().email().required(),
      password: passwordComplexity().required(),
    })
    const {error}=schema.validate(req.body);
    if(error){
        console.log(error.details)
       return res.send({success:false,error:error.details[0].message})
    }
    next();
  };

authRouter.post('/signup',signupValidate,authController.usersignup)
authRouter.post('/login',authController.userlogin)
authRouter.post('/forgotpassword',authController.forgotpass)
authRouter.post('/resetpassword/:id/:token',authController.resetpass)
exports.router=authRouter