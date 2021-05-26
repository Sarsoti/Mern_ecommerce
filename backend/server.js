// const express = require("express");
// const products = require("./data/products");
// const cors = require("cors");
// const dotenv = require("dotenv");

import express from "express";       //ES module
import products from "./data/products.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import {notFound, errorHandler} from "./middlewares/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API server is working");
});

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);

//   res.json(product);
// });
app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));