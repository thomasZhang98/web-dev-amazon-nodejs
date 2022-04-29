import * as ordersDao from "../database/orders/orders-dao.js";

const findOrderItem = async (req, res) => {
  const orderId = req.params.oid
  const orderItem = await ordersDao.findOrder(orderId);
  res.json(orderItem);
}

const findOrder = async (req, res) => {
  const orderNumber = req.params.orderNumber
  const order = await ordersDao.findByOrderNumber(orderNumber);
  res.json(order);
}

const createOrderItem  = async (req, res) => {
  const newOrderItem = req.body;
  const orderDate = new Date(newOrderItem.orderTime);
  newOrderItem.orderTime = orderDate;
  const insertedOrder = await ordersDao.createOrder(newOrderItem);
  res.json(insertedOrder);
}

const updateOrderItem  = async (req, res) => {
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
  app.get('/api/orders/item/:oid', findOrderItem);
  app.get('/api/orders/:orderNumber', findOrder);
  app.post('/api/orders/item', createOrderItem);
  app.put('/api/orders/item/:oid', updateOrderItem)
  app.delete('/api/orders/item/:oid', deleteOrderItem);
  app.delete('/api/orders/:orderNumber', deleteOrder);
}