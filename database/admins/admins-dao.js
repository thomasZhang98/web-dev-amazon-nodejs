import adminsModel from './admins-model.js';
const findAllAdmins = async () => await adminsModel.find();
const createAdmin = async (admin) => await adminsModel.create(admin);
const deleteAdmin = async (aid) => await adminsModel.deleteOne({_id: aid});
const updateAdmin = async (aid, admin) => await adminsModel.updateOne({_id: aid}, {$set: admin})

export default {
    findAllAdmins,
    createAdmin,
    deleteAdmin,
    updateAdmin
}