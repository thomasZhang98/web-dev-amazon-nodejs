import buyersDao from "../database/buyers/buyers-dao.js";
import ordersDao from "../database/orders/orders-dao.js";

const createBuyer = async (req, res) => {
  const newBuyer = {
    "userName": "Buyer",
    "password": "123123Buyer",
    "firstName": "Buyer",
    "lastName": "Byr",
    ...req.body
  }

  const insertedBuyers = await buyersDao.createBuyer(newBuyer);
  await res.json(insertedBuyers);
}

const findAllBuyers = async (req, res) => {
  const buyers = await buyersDao.findAllBuyers()
  await res.json(buyers);
}

const updateBuyer = async (req, res) => {
  const buyerIdToUpdate = req.params.bid;
  const updatedBuyer = req.body;
  const status = await buyersDao.updateBuyer(buyerIdToUpdate, updatedBuyer);
  res.send(status);

}

const deleteBuyer = async (req, res) => {
  const buyerIdToDelete = req.params.bid;
  const status = await buyersDao.deleteBuyer(buyerIdToDelete);
  res.send(status);
}

const findOrders  = async (req, res) => {
  const buyerId = req.params.bid
  const order = await ordersDao.findByBuyerId(buyerId);
  await res.json(order);
}

export default (app) => {
  app.post('/api/buyers', createBuyer);
  app.get('/api/buyers', findAllBuyers);
  app.put('/api/buyers/:bid', updateBuyer);
  app.delete('/api/buyers/:bid', deleteBuyer);
  app.get('/api/buyers/:bid/orders', findOrders)
};
