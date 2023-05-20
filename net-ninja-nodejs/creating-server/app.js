const express = require("express");
const mongoose = require("mongoose");


const blogRouter = require("./routes/blogRoutes");

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI =
	"mongodb+srv://snowgamer17:snowgamer17@blogapp.fazoklg.mongodb.net/?retryWrites=true&w=majority";

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => app.listen(3000))
	.catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
	res.redirect("/blogs");
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRouter);

// 404 page
app.use((req, res) => {
	res.status(404).render("404", { title: "404" });
});

// ROUTE PARAMETER => the varibale part of the route that may change value
