const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router(); // mini express app tied to the other express app (or plugable into the other express app)

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
	res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
	console.log(req.body.title);
	res.redirect("/"); // will redirect the user to the slash route ("/")
});

module.exports = router; // is an object
