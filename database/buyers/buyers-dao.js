import buyersModel from './buyers-model.js';
export const findAllBuyers = () => buyersModel.find();
export const createBuyer = (buyer) => buyersModel.create(buyer);
export const deleteBuyer = (bid) => buyersModel.deleteOne({_id: bid});
export const updateBuyer = (bid, buyer) => buyersModel.updateOne({_id: bid}, {$set: buyer})