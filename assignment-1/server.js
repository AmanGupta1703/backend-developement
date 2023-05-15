const http = require("http");
const port = 3000;

const server = http.createServer(function (request, response) {
	const url = request.url;
	const method = request.method;

	if (url === "/") {
		response.write(`<html>`);
		response.write(`<head><title>User Data</title></head>`);
		response.write(
			`<body><form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Send</button></form></body>`
		);
		response.write(`</html>`);
		return response.end();
	}

	if (url === "/users") {
		response.write(`<html>`);
		response.write(`<head><title>User Data</title></head>`);
		response.write(
			`<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>`
		);
		response.write(`</html>`);
		return response.end();
	}

	if (url === "/create-user" && method === "POST") {
		const body = []; // array of buffered chunks

		request.on("data", function (chunk) {
			body.push(chunk);
			console.log(chunk);
		}); // every peice of incoming data
		console.log(body);

		return request.on("end", function () {
			const parsedBody = Buffer.concat(body).toString(); // single buffer of all the chunks
			const message = parsedBody.split("=")[1];
			console.log(message);
			response.statusCode = 302;
			response.setHeader("Location", "/");
			return response.end();
		});
	}

	response.setHeader("Content-Type", "text/html");
	response.write("no page found!");
	response.end();
});

server.listen(port);
