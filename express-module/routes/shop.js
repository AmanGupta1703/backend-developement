const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res) => {
	console.log(path.join(rootDir, "views", "shop.html"));
	res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;