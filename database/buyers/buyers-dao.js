import buyersModel from './buyers-model.js';
const findAllBuyers = async () => await buyersModel.find();
const findOneBuyer = async (bid) => await buyersModel.findOne({_id: bid});
const findBuyersByCredentials = async (userName, password) => await buyersModel.findOne({userName, password});
const createBuyer = async (buyer) => await buyersModel.create(buyer);
const deleteBuyer = async (bid) => await buyersModel.deleteOne({_id: bid});
const updateBuyer = async (bid, buyer) => await buyersModel.updateOne({_id: bid}, {$set: buyer})

export default {
    findAllBuyers,
    findOneBuyer,
    findBuyersByCredentials,
    createBuyer,
    deleteBuyer,
    updateBuyer
}
