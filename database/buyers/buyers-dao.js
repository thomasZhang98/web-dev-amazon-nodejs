import buyersModel from './buyers-model.js';
export const findAllBuyers = () => buyersModel.find();
export const findBuyersByCredentials = (userName, password) => buyersModel.findOne({userName, password});
export const createBuyer = (buyer) => buyersModel.create(buyer);
export const deleteBuyer = (bid) => buyersModel.deleteOne({_id: bid});
export const updateBuyer = (bid, buyer) => buyersModel.updateOne({_id: bid}, {$set: buyer})