// const whislist = require('../model/whislist.model');
const Product = require('../model/product.model');
const whislistService = require('../services/whislist.service');
const WhislistService = new whislistService();


exports.addwhislist = async(req,res)=>{
    try {
        let {product_item} = req.body;
        let product = await Product.findById(product_item)
        if (!product) {
           return res.json({message:"product is not available in whislist list..."});
        }
        let whislist = await WhislistService.whishlistFindOne({product_item:req.body.product_item,user:req.user._id});
        if (whislist) {
            return res.json({message:"items is already exist in list..."});
        }
        whislist = await WhislistService.whishlistCreate({
            ...req.body,
            user:req.user._id,
        });
        whislist.save();
        res.status(201).json({message:"item is added in whislist list",whislist});
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
}

exports.deletewhislist = async(req,res)=>{
    try {
        let id = req.params.id;
        let whislist = await whislist.findOne({_id:id,user:req.user._id,isDelete:false});
        if (!whislist) {
            return res.json({message:'user has does not in whislist list...'});    
        }
        whislist = await whislist.findOneAndUpdate(
            {_id:id},
            {$set:{isDelete:true}},
            {new:true}
        )
        whislist.save();
        res.json({message:'product item is deleted in whislist list',whislist});    

    } 
    catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
}