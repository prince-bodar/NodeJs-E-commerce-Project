const express = require('express');
const userRoutes = express.Router();
const { userverify } = require('../helper/verify_token');
const { signup, login, updateUser, deleteUser, getUser , getAllUser } = require('../controller/user.controller');
const { upload,ProfileImageUpload } = require('../helper/profile_image');



userRoutes.post('/signup',upload.single('profileImage'),ProfileImageUpload,signup);
userRoutes.post('/login',login);
userRoutes.put('/updateuser',userverify,updateUser);
userRoutes.delete('/deleteuser',userverify,deleteUser);
userRoutes.get('/admin/get.user/:id',userverify,getUser);
userRoutes.get('/admin/get.all-user',userverify,getAllUser);


module.exports = userRoutes;