const fs = require("fs");

function requestHandler(request, response) {
	const url = request.url;
	const method = request.method;

	if (url === "/") {
		response.setHeader("Content-Type", "text/html");
		response.write(`<html>`);
		response.write(`<head><title>My Form</title></head>`);
		response.write(
			`<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>`
		);
		response.write(`</html>`);
		return response.end();
	}

	if (url === "/message" && method === "POST") {
		const body = [];

		request.on("data", function (chunk) {
			console.log(chunk);
			body.push(chunk);
		});

		return request.on("end", function () {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split("=")[0];
			fs.writeFile("message.txt", message, function (error) {
				response.statusCode = 302;
				response.setHeader("Location", "/");
				return response.end();
			});
		});
	}

	response.setHeader("Content-Type", "text/html");
	response.write(`<html>`);
	response.write(`<head><title>My First Server</title></head>`);
	response.write(`<body><h1>Server.js</h1></body>`);
	response.write(`</html>`);
	response.end();
}

module.exports = requestHandler;
