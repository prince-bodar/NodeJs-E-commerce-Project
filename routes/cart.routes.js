const express = require('express');
const cartRoutes = express.Router();
const { userverify } = require('../helper/verify_token');
const { addCart, updateCart, deleteCart, getCart, getAllCart }= require('../controller/cart.controller');

cartRoutes.post('/add.cart',userverify,addCart)
cartRoutes.put('/update.cart/:id',userverify,updateCart);
cartRoutes.delete('/delete.cart/:id',userverify,deleteCart)
cartRoutes.get('/get.cart/:id',userverify,getCart);
cartRoutes.get('/get.all.cart',userverify,getAllCart);

module.exports = cartRoutes;