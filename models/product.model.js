const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a blog title"]
        },

        body: {
            type: String,
            required: [true, "Please enter blog content"]
        },

        author: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
