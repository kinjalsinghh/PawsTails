const productModel=require('../Model/Product')
const products=productModel.Products

exports.addproduct=async (req,res)=>{
    const Products= await products.find({})
    let id;
    if(Products.length>0){
        let products_arr_last=Products.slice(-1);
        let last_product=products_arr_last[0];
        id=last_product.id+1;
    }else{
        id=1;
    }
    const Product=new products({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    })
    console.log(Product)
    await Product.save();
    console.log("saved");
    res.json({
        success:1,
        name:Product.name
    })
}
exports.removeproduct=async (req,res)=>{
    await products.findOneAndDelete({id:req.body.id})
    console.log('removed')
    res.json({
        success:1,
        name:req.body.name
    })
}
exports.getallproducts=async (req,res)=>{
    const Products=await products.find({});
    console.log("All Products are fetched")
    res.send(Products);
}
exports.getnewproducts=async(req,res)=>{
    const Products=await products.find({})
    const newProducts=Products.slice(1).slice(-8);
    console.log('new products fetched')
    res.send(newProducts)
}
exports.getbestsellers=async(req,res)=>{
    const Products=await products.find({category:"supplement"})
    const bestProducts=Products.slice(1,5)
    res.send(bestProducts)
}