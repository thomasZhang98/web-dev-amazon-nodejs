import * as adminsDao from "../database/admins/admins-dao.js";


const adminController = (app) => {
  app.post('/api/admins', createAdmin);
  app.get('/api/admins', findAllAdmins);
  app.put('/api/admins/:aid', updateAdmin);
  app.delete('/api/admins/:aid', deleteAdmin);
}


const createAdmin = async (req, res) => {

  const newAdmin = {
    "userName": "Admin",
    "password": "123123Admin",
    "firstName": "Admin",
    "lastName": "123123",
    "level":"1",

    ...req.body
  }

  const insertedAdmins = await adminsDao.createAdmin(newAdmin);
  await res.json(insertedAdmins);
}

const findAllAdmins = async (req, res) => {
  const admins = await adminsDao.findAllAdmins()
  await res.json(admins);
}

const updateAdmin = async (req, res) => {
  const adminIdToUpdate = req.params.aid;
  const updatedAdmin = req.body;
  const status = await adminsDao.updateAdmin(adminIdToUpdate, updatedAdmin);
  res.send(status);

}

const deleteAdmin = async (req, res) => {
  const adminIdToDelete = req.params.aid;
  const status = await adminsDao.deleteAdmin(adminIdToDelete);
  res.send(status);
}



export default adminController;

















