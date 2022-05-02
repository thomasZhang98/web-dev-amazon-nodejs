import ordersDao from "../database/orders/orders-dao.js"

const findOrder = async (req, res) => {
  const orderId = req.params.oid
  const orderItem = await ordersDao.findOrder(orderId);
  res.json(orderItem);
}

const updateOrder = async (req, res) => {
  const orderIdToUpdate = req.params.oid;
  const updatedOrder = req.body;
  const response = await ordersDao.updateOrder(orderIdToUpdate, updatedOrder);
  const status = response.acknowledged ? 200 : 500;
  res.send(status);
}

const deleteOrder = async (req, res) => {
  const orderIdToDelete = req.params.oid;
  const status = await ordersDao.deleteOrder(orderIdToDelete);
  res.send(status);
}

const makeOrder = async (req, res) => {
  const newOrderItem = req.body;
  const buyer_id = req.session['currentUser']._id
  const madeOrder = await ordersDao.makeOrder(newOrderItem, buyer_id);
  res.json(madeOrder);
}

export default (app) => {
  app.get('/api/orders/:oid', findOrder);
  app.post('/api/orders', makeOrder);
  app.put('/api/orders/:oid', updateOrder)
  app.delete('/api/orders/:oid', deleteOrder);
}