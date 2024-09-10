const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

exports.userverify = async(req,res,next)=>{
    try {
    let token = req.headers["authorization"].split(" ")[1];
    let {userId} = jwt.verify(token,process.env.SECRET_KEY);

    req.user = await User.findById(userId);
    if (req.user) {
        next();
    }
    else
    {
        res.json({message:'user invalid'});
    }
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({message:"invalid token..."});
    }
   
}