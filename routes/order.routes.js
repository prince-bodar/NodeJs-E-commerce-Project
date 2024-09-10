const express = require('express');
const orderRoutes = express.Router();
const {  userverify } = require('../helper/verify_token');
const { addOrder, updateOrder, deleteOrder,  }= require('../controller/order.controller');

orderRoutes.post('/add.order',userverify,addOrder);
orderRoutes.put('/update.order',userverify,updateOrder);
orderRoutes.delete('/delete.order/:id',userverify,deleteOrder);


module.exports = orderRoutes;