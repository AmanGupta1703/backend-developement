const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const rootDir = require("./util/path");

const app = express();

// want to compile dynamic templates with the pug engine
// app.set("view engine", "pug"); // setting global configuration value // build in express (kind of)

/*app.engine(
	"hbs",
	expressHbs({
		layoutsDir: "views/layouts/",
		defaultLayout: "main-layout",
		extname: "hbs",
	})
);*/ // `expressHbs() initalizes the engine`
app.set("view engine", "ejs"); // setting global configuration value
app.set("views", "views"); // where to find them?

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // static middlewear

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
	// res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
	res.status(404).render("404", { pageTitle: "Page Not Found!" });
});

app.listen(port);
// `views` folder => what we serve to the user in one place of our application in the views folder here. => bunch of `html` files
// module.exports = path.dirname(process.mainModule.filename);
// module.exports = path.dirname(require.main.filename)

// npm install --save express-handlebars@3.0
