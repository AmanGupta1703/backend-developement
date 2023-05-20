// Core Node Modules
const fs = require("fs");
const path = require("path");

const p = path.join(
	path.dirname(require.main.filename),
	"data",
	"products.json"
);

const getProductsFromFile = (cb) => {
	fs.readFile(p, (error, fileContent) => {
		if (error) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

module.exports = class Product {
	constructor(title) {
		this.title = title;
	}

	save() {
		// products.push(this); // pushes the object which calls the `save` method
		getProductsFromFile((products) => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (error) => {
				console.log(error);
			});
		});
		fs.readFile(p, (error, fileContent) => {});
	}

	static fetchAll(cb) {
		getProductsFromFile(cb);
	}
};
