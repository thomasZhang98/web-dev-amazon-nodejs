import buyersModel from './buyers-model.js';
const findAllBuyers = async () => await buyersModel.find();
const createBuyer = async (buyer) => await buyersModel.create(buyer);
const deleteBuyer = async (bid) => await buyersModel.deleteOne({_id: bid});
const updateBuyer = async (bid, buyer) => await buyersModel.updateOne({_id: bid}, {$set: buyer})

export default {
    findAllBuyers,
    createBuyer,
    deleteBuyer,
    updateBuyer
}