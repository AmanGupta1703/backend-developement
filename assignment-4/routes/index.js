const express = require("express");

const router = express.Router();

const userData = require("./users");

router.get("/", (req, res) => {
	res.render("index", { pageTitle: "Home" });
});

module.exports = router;