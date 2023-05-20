const express = require("express");
const bodyParser = require("body-parser");

const rootRoutes = require("./routes/index");
const userData = require("./routes/users");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(rootRoutes);

app.use(userData.routes);

app.use("/", (req, res, next) => {
	res.status(404).render("404", { pageTitle: "Page Not Found!" });
});

app.listen(3000);
