const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router(); // mini express app tied to the other express app (or plugable into the other express app)

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
	// res.sendFile(path.join(rootDir, "views", "add-product.html"));
	res.render("add-product", {
		pageTitle: "Add Product",
		path: "/admin/add-product",
		activeAddProduct: true,
		formCSS: true,
		productCSS: true,
		activeAddProduct: true
	});
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
	products.push({ title: req.body.title });
	res.redirect("/"); // will redirect the user to the slash(root) route ("/")
});

exports.routes = router; // is an object
exports.products = products;
