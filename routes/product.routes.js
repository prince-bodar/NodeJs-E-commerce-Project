const express = require("express");
const productRoutes = express.Router();
const { userverify } = require("../helper/verify_token");
const {
  addNewProducts,
  updateProduct,
  deleteProduct,
  getProduct,
  getALLProduct,
} = require("../controller/product.controller");

// add update delete product routes by admin

productRoutes.post("/admin/add.product", userverify, addNewProducts);
productRoutes.put("/admin/update.product/:id", userverify, updateProduct);
productRoutes.delete("/admin/delete.product/:id", userverify, deleteProduct);

//get product
productRoutes.get("/admin/get.product/:id", userverify, getProduct);
productRoutes.get("/admin/get.all-product", userverify, getALLProduct);

module.exports = productRoutes;
