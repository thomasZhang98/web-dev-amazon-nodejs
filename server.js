import express from 'express';
import cors from 'cors';
import ordersController from "./controllers/orders-controller.js";
import buyersController from "./controllers/buyers-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdevamazon'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
ordersController(app);
buyersController(app);
app.listen(process.env.PORT || 4000);