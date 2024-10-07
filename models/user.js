const mongoose=require('mongoose');

const userScheme=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    specification:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('User',userScheme);