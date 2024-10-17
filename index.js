const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blogs.js'); 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Welcome to the Blogging Platform API");
});

app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/blogs/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/blogs', async (req, res) => {
    try {
        const blog = await Blog.create(req.body); 
        res.status(201).json(blog); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/blogs/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/blogs/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        res.status(200).json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

mongoose.connect("mongodb+srv://kozhaevadina15sh:L2oMR8KKKwPydTcO@backenddb.z7dj3.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });
