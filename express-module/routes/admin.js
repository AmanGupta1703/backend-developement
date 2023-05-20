const path = require("path");

const express = require("express");

// const rootDir = require("../util/path");

const adminController = require("../controllers/admin");

const router = express.Router(); // mini express app tied to the other express app (or plugable into the other express app)

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

router.get("/admin/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

module.exports = router; // is an object
// exports.products = products;
