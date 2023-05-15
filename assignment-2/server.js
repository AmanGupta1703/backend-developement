const express = require("express");
const app = express();
const port = 3000;

// app.use((req, res, next) => {
// 	console.log(`MiddleWare 1`);
//     next();
// });

// app.use((req, res, next) => {
// 	console.log(`MiddleWare 2`);
// });

app.use("/users", (req, res, next) => {
	res.send(`<h1>The "Users" Page</h1>`);
});

app.use("/", (req, res, next) => {
	res.send(`<h1>Hello!!!</h1>`);
});

app.listen(port);
