const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');
const userService = new UserService();

exports.signup = async(req,res)=>{
    try {
        let user = await userService.userFindOne({email:req.body.email,isDelete:false});
        if (user) {
            return res.json({message:"user is already exists..."});
        }
        let hashpassword = await bcrypt.hash(req.body.password,10);
        user = await userService.userCreate({
            ...req.body,
            password:hashpassword,
        })
        if (req.file) {
            user.profileImage = req.file.path;
        }
        user.save();
        res.status(201).json({message:"user is added",user});
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error..."});
    }
}

exports.login = async(req,res)=>{
    try {
        let user =await userService.userFindOne({email:req.body.email});
        if (!user) {
            return res.json({message:"user is not found..."});
        }
        let checkPassword = await bcrypt.compare(req.body.password,user.password);
        if (!checkPassword) {
            return res.json({message:"password is not match..."});
        }
        let payload = {
            userId : user._id
        }
        let token = await jwt.sign(payload,process.env.SECRET_KEY);
        res.status(200).json({token,message:'login sucess'});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error..."});
    }
}

exports.getUser = async(req,res)=>{
    try {
        let user = await userService.getUserById(req.params.id,{isDelete:false});
        if (!user) {
            res.json({message:"user is not exist..."});
        }
        user.save();
        res.status(200).json(user);
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error..."});
    }
}

exports.getAllUser = async(req,res)=>{
    try {
        let user = await userService.getAllUser({isDelete:false});
        res.status(201).json(user);
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error..."});
    }
}

exports.updateUser = async(req,res)=>{
    try {
       let user = await userService.updateUserById(
           req.user._id,
          { ...req.body}
        )
        user.save();
        res.status(201).json({message:"user is updated",user});
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error..."});
    }
}

exports.deleteUser = async(req, res)=>{
    try {
       let user = await userService.deleteUserById(
        req.user._id,
        {...req.body}
        )
        res.status(201).json({message:"user is deleted...",user});
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
}

