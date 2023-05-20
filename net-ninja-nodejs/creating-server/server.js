const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	console.log(`Request Made to the sever.`);

	// set header content type
	res.setHeader("Content-Type", "text/html");

	// res.write(`hello, ninjas`);
	// res.end();

	let path = "./views/";

	switch (req.url) {
		case "/":
			res.statusCode = 200;
			path += "index.html";
			break;

		case "/about":
			res.statusCode = 200;
			path += "about.html";
			break;

		case "/about-me":
			res.statusCode = 301;
			res.setHeader("Location", "/about");
			res.end();
			break;

		default:
			res.statusCode = 404;
			path += "404.html";
			break;
	}

	fs.readFile(path, (error, data) => {
		if (error) {
			console.log(error);
			res.end();
		} else {
			res.write(data);
			res.end();
		}
	});
});

server.listen(3000, "localhost", () => {
	console.log(`listening for request on port 3000`);
});

// localhost => it connect back to our computer (acting as a server)
// port => doors into your computer through which internet connections are made to different programs. (kind of)
