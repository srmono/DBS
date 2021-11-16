import express from "express";
import db from "./config/database.js";
import productRoutes from './routes/index.js'
//const express = require(express);
import cors from 'cors';

try {
    await db.authenticate();
    console.log("Database Connected")
} catch (error) {
    console.error("Connection Error", error)
}

//create app
const app = express();
app.use(cors());

app.use(express.json())

app.use("/products", productRoutes);

//setup port
app.listen(5000, () => console.log("Server is running at PORT 5000"));