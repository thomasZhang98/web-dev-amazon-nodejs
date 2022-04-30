import ordersModel from './orders-model.js';
const findOrder = async (oid) => await ordersModel.find({_id: oid});
const findByBuyerId = async (buyerId) => await ordersModel.find({buyerId: buyerId});
const createOrder = async (order) => await ordersModel.create(order);
const updateOrder = async (oid, order) => await ordersModel.updateOne({_id: oid}, {$set: order});
const deleteOrder = async (oid) => await ordersModel.deleteOne({_id: oid});

export default {
    findOrder,
    findByBuyerId,
    createOrder,
    updateOrder,
    deleteOrder
}