const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// const rootDir = require("./util/path"); 
const pageNotFoundController = require('./controllers/error');

const app = express();

app.set("view engine", "ejs"); // setting global configuration value
app.set("views", "views"); // where to find them?

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // static middlewear

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("/", pageNotFoundController.get404Page);

app.listen(port);
// `views` folder => what we serve to the user in one place of our application in the views folder here. => bunch of `html` files
// module.exports = path.dirname(process.mainModule.filename);
// module.exports = path.dirname(require.main.filename)

// npm install --save express-handlebars@3.0
