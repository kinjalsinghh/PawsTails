const mongoose=require('mongoose')
const {Schema}=mongoose

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object
    },
    cartType:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now
    }
})

exports.Users=mongoose.model('Users',userSchema)