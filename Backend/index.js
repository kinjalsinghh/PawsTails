require('dotenv').config();
const port=process.env.PORT || 5050;
const express=require('express');
const server=express();
const mongoose=require('mongoose');
const multer=require('multer');
const path=require('path');
const cors=require('cors');
const productRouter=require('./Routes/productRoutes')
const authRouter=require('./Routes/authRoutes')
const cartRouter=require('./Routes/cartRoutes')

//middlewares
server.use(express.json());
server.use(cors());
server.use(express.urlencoded({extended:true}))
//DB connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://singhkinjal7272:${process.env.PASSWORD}@cluster0.ki5ncvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
  console.log("Database connected");
}
// Image storage engine
const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({storage:storage});
server.use('/images',express.static('upload/images'));
server.post('/upload',upload.single('product'),(req,res)=>{
   res.send({
    success:1,
    image_url:`http://localhost:3000/images/${req.file.filename}`
   })
})
// APIs

server.use('/',productRouter.router)
server.use('/',authRouter.router)
server.use('/',cartRouter.router)


// Server Running
server.listen(port,(err)=>{
   if(!err){
    console.log(`Server running on port ${port}`)
   }else{
    console.log(err)
   }
})
