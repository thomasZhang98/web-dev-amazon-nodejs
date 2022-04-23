import ordersModel from './orders-model.js';
export const findByOrderNumber = (orderNumber) => ordersModel.find({orderNumber: orderNumber});
export const findByConsumerId = (consumerId) => ordersModel.find({consumerId: consumerId});
export const createOrder = (order) => ordersModel.create(order);
export const deleteOrderItem = (oid) => ordersModel.deleteOne({_id: oid});
export const deleteOrder = (orderNumber) => ordersModel.deleteMany({orderNumber: orderNumber});
export const updateOrder = (oid, order) => ordersModel.updateOne({_id: oid}, {$set: order});