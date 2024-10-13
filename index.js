const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from Node Api")
});


mongoose.connect("mongodb+srv://kozhaevadina15sh:L2oMR8KKKwPydTcO@backenddb.z7dj3.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => console.log('Connected!'));