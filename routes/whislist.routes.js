const express = require('express');
const whislistRoutes = express.Router();
const { userverify } = require('../helper/verify_token');
const { addwhislist,deletewhislist } = require('../controller/whislist.controller');

whislistRoutes.post('/add.whislist',userverify,addwhislist)
whislistRoutes.delete('/delete.whislist/:id',userverify,deletewhislist)

module.exports = whislistRoutes;