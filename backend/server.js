 const express = require("express");
 const products = require("./data/products");
 const app = express();
 const cors = require("cors");

// import express from "express";                       //Es modules 
// import products from "./data/products.js";
// import cors from "cors";
// import dotenv from "dotenv";


 const dotenv = require("dotenv");

 dotenv.config();

 app.use(cors());

 app.get("/", (req, res, next) => {
  res.send("API server is working");
});

app.get("/api/products", (req, res) => {
    res.json(products);
  });
  
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));