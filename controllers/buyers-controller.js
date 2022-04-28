import * as ordersDao from "../database/orders/orders-dao.js";

const findOrders  = async (req, res) => {
  const buyerId = req.params.buyerId
  const order = await ordersDao.findByBuyerId(buyerId);
  res.json(order);
}

export default (app) => {
  app.get('/api/buyers/:buyerId/orders', findOrders);
}
