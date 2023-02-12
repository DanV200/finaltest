const mongoose=require('mongoose')

const User=mongoose.model('Users',new mongoose.Schema({
    id:{
        type:String,
        
    },
    name: {
        type: String,
        required: true,
      },
    password:{
        type:String,
        required:true
    },
    balance:{
        type:String,
        required:true
    }


}))
module.exports={User};