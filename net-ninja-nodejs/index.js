const os = require("os");
const fs = require("fs");

// os
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);

// file system

// reading files
fs.readFile("./blogs/sample.txt", function (error, data) {
	if (error) {
		console.log(error);
	}
	// console.log("Buffer: ", data); // logs buffer which is a package of data that's been send back to us.

	// logs the buffer in a type of string
	// console.log("String(buffer converted to string): ", data.toString());
});

// writing to files
fs.writeFile("./blogs/sample.txt", "Hello, World", function () {
	console.log(`Written to the file`);
});

// directories
if (!fs.existsSync("./assets")) {
	fs.mkdir("./assets", function (error) {
		if (error) {
			console.log(error);
		}
		console.log(`Directory Created...`);
	});
} else {
	// folder deletion
	fs.rmdir("./assets", function (error) {
		if (error) {
			console.log(error);
		}
		console.log(`Folder deleted.`);
	});
}

// Deleting Files
if (fs.existsSync("./blogs/deleteFile.txt")) {
	fs.unlink("./blogs/deleteFile.txt", function (error) {
		if (error) {
			console.log(error);
		}
		console.log(`File Deleted`);
	});
} else {
	console.log(`File does not exist.`);
}

