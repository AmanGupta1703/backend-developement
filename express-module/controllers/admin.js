const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
	// res.sendFile(path.join(rootDir, "views", "add-product.html"));
	res.render("admin/add-product", {
		pageTitle: "Add Product",
		path: "/admin/add-product",
		activeAddProduct: true,
		formCSS: true,
		productCSS: true,
		activeAddProduct: true,
	});
};

exports.postAddProduct = (req, res, next) => {
	const product = new Product(req.body.title);
	product.save(); // pushes the created `object` to the array of products
	res.redirect("/"); // will redirect the user to the slash(root) route ("/")
};

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render("admin/products-list", {
			prods: products,
			pageTitle: "Admin Products",
			path: "/admin/products-list",
		});
	});
};
