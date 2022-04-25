import * as ordersDao from "../database/orders/orders-dao.js";

const findOrder = async (req, res) => {
  const orderNumber = req.params.orderNumber
  const order = await ordersDao.findByOrderNumber(orderNumber);
  res.json(order);
}

const findOrderByBuyerId  = async (req, res) => {
  const buyerId = req.params.buyerId
  const order = await ordersDao.findByBuyerId(buyerId);
  res.json(order);
}

const createOrder = async (req, res) => {
  const newOrder = req.body;
  const insertedOrder = await ordersDao.createOrder(newOrder);
  res.json(insertedOrder);
}

const updateOrder = async (req, res) => {
  const orderIdToUpdate = req.params.oid;
  const updatedOrder = req.body;
  const response = await ordersDao.updateOrder(orderIdToUpdate, updatedOrder);
  const status = response.acknowledged ? 200 : 500;
  res.send(status);
}

const deleteOrderItem = async (req, res) => {
  const orderIdToDelete = req.params.oid;
  const status = await ordersDao.deleteOrderItem(orderIdToDelete);
  res.send(status);
}

const deleteOrder = async (req, res) => {
  const orderNumberToDelete = req.params.orderNumber;
  const status = await ordersDao.deleteOrder(orderNumberToDelete);
  res.send(status);
}

export default (app) => {
  app.post('/api/orders', createOrder);
  app.get('/api/orders/:orderNumber', findOrder);
  app.get('/api/orders/:buyerId', findOrderByBuyerId);
  app.put('/api/orders/:oid', updateOrder)
  app.delete('/api/orders/:oid', deleteOrderItem);
  app.delete('/api/orders/:orderNumber', deleteOrder);
}