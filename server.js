import express from 'express';

import cors from 'cors';
import mongoose from "mongoose";
import session from 'express-session';
import ordersController from "./controllers/orders-controller.js";
import buyersController from "./controllers/buyers-controller.js";
import adminsController from "./controllers/admins-controller.js";
import productsController from "./controllers/products-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdevamazon'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors({
  credentials: true,
  // TODO: change to netlify link
  origin: 'http://localhost:3000'
}));
app.use(express.json());

const sess = {
  secret: 'web-dev amazon', // TODO: move this to environment variable
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
