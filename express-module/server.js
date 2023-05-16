const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const rootDir = require("./util/path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // static middlewear

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
	res.status(404).sendFile(path.join(rootDir, "views", "page-not-found.html"));
});

app.listen(port);
// `views` folder => what we serve to the user in one place of our application in the views folder here. => bunch of `html` files
// module.exports = path.dirname(process.mainModule.filename);
// module.exports = path.dirname(require.main.filename)