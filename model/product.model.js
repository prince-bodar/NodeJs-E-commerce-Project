const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
   
    productImage:[{
        type:String,
    }],
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true,
        enum:['table','bed','chair']
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        default:0,
    },
    isDelete:{
        type:Boolean,
        default:false
    }

})

module.exports = mongoose.model('products',productSchema);