const whislist = require('../model/whislist.model');

module.exports = class whislistService {
    favCreate = async(body) =>{
        return await whislist.create(body);
    }

    // get specific user
    favFindOne = async(body)=>{
        return await whislist.findOne(body);
    }
    
}