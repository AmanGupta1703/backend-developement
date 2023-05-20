const express = require("express");

const router = express.Router();

const users = [];

router.get("/users", (req, res) => {
	res.render("users", { pageTitle: "Users", users: users });
});

router.post("/add-user", (req, res) => {
	users.push({title: req.body.username});
	console.log(users);
	res.redirect("/users");
});



exports.users = users;
exports.routes = router;
