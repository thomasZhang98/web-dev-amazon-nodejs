import express from 'express';
import cors from 'cors';
import ordersController from "./controllers/orders-controller.js";
import buyersController from "./controllers/buyers-controller.js";
import adminsController from "./controllers/admins-controller.js";
import productsController from "./controllers/products-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdevamazon'
mongoose.connect(CONNECTION_STRING);

const session = require('express-session')

const app = express();
app.use(cors());
app.use(express.json());

const sess = {
  secret: 'keyboard cat', // TODO: move this to environment variable
  cookie: {}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))



ordersController(app);
buyersController(app);
adminsController(app);

productsController(app);
app.listen(process.env.PORT || 4000);
app.get('/', (req, res) => {res.send('Welcome to Amazon!')})
