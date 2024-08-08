const express=require('express')
const productRouter=express.Router();
const productController=require('../Controllers/productController')
productRouter.post('/addproduct',productController.addproduct)
productRouter.post('/removeproduct',productController.removeproduct)
productRouter.get('/allproducts',productController.getallproducts)
productRouter.get('/newproducts',productController.getnewproducts)
productRouter.get('/bestsellers',productController.getbestsellers)
exports.router=productRouter