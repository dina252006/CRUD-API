const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();


app.use(express.json());




app.get('/', (req, res) => {
    res.send("Hello from Node Api")
});


app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


mongoose.connect("mongodb+srv://kozhaevadina15sh:L2oMR8KKKwPydTcO@backenddb.z7dj3.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });    
})
.catch(() => {
    console.log("Connection failed!");
});
