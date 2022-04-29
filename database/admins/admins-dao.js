import adminsModel from './admins-model.js';
export const findAllAdmins = () => adminsModel.find();
export const createAdmin = (admin) => adminsModel.create(admin);
export const deleteAdmin = (aid) => adminsModel.deleteOne({_id: aid});
export const updateAdmin = (aid, admin) => adminsModel.updateOne({_id: aid}, {$set: admin})