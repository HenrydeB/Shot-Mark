require("dotenv").config();
const path = require('path');
const express = require ('express');
const productRoutes =  require('./routes/productRoutes');
const connectDB = require('./config/db');

connectDB(); 

const app = express();

//mongodb+srv://user-123:ecommerce123@mern-learn.hw4ae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "API running..."});
});

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    })
} else {
    app.get('/', (req, res) => {
        res.send('Api running');
    });
}

const PORT = process.env.PORT || 5000;

app.listen (process.env.PORT, () => console.log(`Listening on port ${PORT}`));