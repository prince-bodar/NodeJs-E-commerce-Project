const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    profileImage:{
        type:String,
    },
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true,
        unique:true
    },
    resetToken:String,
    expireToken:{
        type:Date
    },
    isDelete:{
        type:Boolean,
        default:false,

    }
},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model('users',userSchema);