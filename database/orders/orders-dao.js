import ordersModel from './orders-model.js';
export const findOrder = async (oid) => await ordersModel.find({_id: oid});
export const findByOrderNumber = async (orderNumber) => await ordersModel.find({orderNumber: orderNumber});
export const findByBuyerId = async (buyerId) => await ordersModel.find({buyerId: buyerId});
export const createOrder = async (order) => await ordersModel.create(order);
export const updateOrder = async (oid, order) => await ordersModel.updateOne({_id: oid}, {$set: order});
export const deleteOrderItem = async (oid) => await ordersModel.deleteOne({_id: oid});
export const deleteOrder = async (orderNumber) => await ordersModel.deleteMany({orderNumber: orderNumber});