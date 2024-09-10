const express = require('express');
const productRoutes = express.Router();
const {userverify}  = require('../helper/verify_token');
const { addNewProducts,
        updateProduct, 
        deleteProduct ,
        getProduct, 
        getALLProduct, 
        addReview, 
        getReview, 
        getAllReview, 
        updateReview, 
        deleteReview  } = require('../controller/product.controller');


//get product
productRoutes.get('/get.product/:id',userverify,getProduct);
productRoutes.get('/get.all.product',userverify,getALLProduct);

// add product routes by admin

const { addNewProducts, updateProduct, deleteProduct } = require('../../controller/admin/admin.product.controller');
const { getAllReview, getReview } = require('../../controller/admin/admin.product.controller');

productRoutes.post('/admin/add.product',userverify,addNewProducts);
productRoutes.put('/admin/update.product/:id',userverify,updateProduct);
productRoutes.delete('/admin/delete.product/:id',userverify,deleteProduct);
productRoutes.get('/admin/get.product/:id',userverify,getProduct);
productRoutes.get('/admin/get.all-product',userverify,getALLProduct);

productRoutes.get('/:id/get-all-review',adminVerify,getAllReview);





// user review
productRoutes.post('/:id/add.review',userverify,addReview);
productRoutes.get('/:id/get.review',userverify,getReview);
productRoutes.get('/:id/get.all.review',userverify,getAllReview);
productRoutes.put('/:id/update.review',userverify,updateReview);
productRoutes.delete('/:id/delete.review',userverify,deleteReview);





module.exports = productRoutes;