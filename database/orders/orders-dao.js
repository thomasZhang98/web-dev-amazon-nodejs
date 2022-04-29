import ordersModel from './orders-model.js';
export const findOrder = (oid) => ordersModel.find({_id: oid});
export const findByBuyerId = (buyerId) => ordersModel.find({buyerId: buyerId});
export const createOrder = (order) => ordersModel.create(order);
export const updateOrder = (oid, order) => ordersModel.updateOne({_id: oid}, {$set: order});
export const deleteOrder = (oid) => ordersModel.deleteOne({_id: oid});