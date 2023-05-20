const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

// Schema       is what which will define the structure of the documents 
//              that we're gonna store later in a collection

// Model        is an interface by which to communicate with the database 
//              collection for that database