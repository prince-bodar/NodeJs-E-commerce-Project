const User = require('../model/user.model');

module.exports = class userService {
    userCreate = async(body) =>{
        return await User.create(body);
    }

    // get user
    userFindOne = async(body)=>{
        return await User.findOne(body);
    }

    // get user by id
    getUserById = async (id) =>{
        return await User.findById(id);
    }

    // get all user
    getAllUser = async (body) =>{
        return await User.find(body);
    }

    //  update user
    updateUserById = async ( id, body) =>{
        return await User.findByIdAndUpdate( id,{$set: body},{new:true});
    }

    // delete user
    deleteUserById = async ( id) =>{
        return await User.findByIdAndUpdate( id,{$set:{isDelete:true}},{new:true});
    }
    
}