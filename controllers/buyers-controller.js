import * as buyersDao from "../database/buyers/buyers-dao.js";
import * as ordersDao from "../database/orders/orders-dao.js";

const buyerController = (app) => {
  app.post("/api/register", register);
  app.post("/api/login", login);
  app.post("/api/logout", logout);
  app.post("/api/profile", profile);

  app.post("/api/buyers", createBuyer);
  app.get("/api/buyers", findAllBuyers);
  app.put("/api/buyers/:bid", updateBuyer);
  app.delete("/api/buyers/:bid", deleteBuyer);
  app.get("/api/buyers/:bid/orders", findOrders);
};

const createBuyer = async (req, res) => {
  const newBuyer = {
    userName: "Buyer",
    password: "123123Buyer",
    firstName: "Buyer",
    lastName: "Byr",

    ...req.body,
  };

  const insertedBuyers = await buyersDao.createBuyer(newBuyer);
  await res.json(insertedBuyers);
};

const findAllBuyers = async (req, res) => {
  const buyers = await buyersDao.findAllBuyers();
  await res.json(buyers);
};

const updateBuyer = async (req, res) => {
  const buyerIdToUpdate = req.params.bid;
  const updatedBuyer = req.body;
  const status = await buyersDao.updateBuyer(buyerIdToUpdate, updatedBuyer);
  res.send(status);
};

const deleteBuyer = async (req, res) => {
  const buyerIdToDelete = req.params.bid;
  const status = await buyersDao.deleteBuyer(buyerIdToDelete);
  res.send(status);
};

const findOrders = async (req, res) => {
  const buyerId = req.params.bid;
  const order = await ordersDao.findByBuyerId(buyerId);
  await res.json(order);
};

const register = async (req, res) => {
  const buyer = req.body;
  const existingBuyer = await buyersDao.findBuyersByCredentials(
    buyer.userName,
    buyer.password
  );

  if (existingBuyer) {
    res.sendStatus(403);
  } else {
    const actualBuyer = await buyersDao.createBuyer(buyer);
    req.session["currentBuyer"] = actualBuyer;
    res.json(actualBuyer);
  }
};

const login = async (req, res) => {
  const existingBuyer = await buyersDao.findBuyersByCredentials(
    req.body.userName,
    req.body.password
  );
  if (existingBuyer) {
    req.session["currentBuyer"] = existingBuyer;
    return res.send(existingBuyer);
  } else {
    return res.sendStatus(503);
  }
};

const profile = (req, res) => {
  const currentBuyer = req.session["currentBuyer"];
  if (currentBuyer) {
    res.json(currentBuyer);
  } else {
    res.sendStatus(503);
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
};

export default buyerController;
