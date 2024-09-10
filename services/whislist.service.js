const whislist = require('../model/whislist.model');

module.exports = class whislistService {
    whishlistCreate = async(body) =>{
        return await whislist.create(body);
    }

    // get specific user
    whishlistFindOne = async(body)=>{
        return await whislist.findOne(body);
    }
    
}