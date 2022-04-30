import adminsDao from "../database/admins/admins-dao.js";

const register = async (req, res) => {
  const admin = req.body;
  const existingAdmin = await adminsDao.findAdminsByCredentials(
      admin.userName,
      admin.password
  );

  if (existingAdmin) {
    res.sendStatus(403);
  } else {
    const actualAdmin = await adminsDao.createAdmin(admin);
    req.session["currentUser"] = actualAdmin;
    res.json(actualAdmin);
  }
};

const login = async (req, res) => {
  const existingAdmin = await adminsDao.findAdminsByCredentials(
      req.body.userName,
      req.body.password
  );
  if (existingAdmin) {
    req.session["currentUser"] = existingAdmin;
    res.sendStatus(200);
  } else {
    res.sendStatus(503);
  }
};

const createAdmin = async (req, res) => {
  const insertedAdmin = await adminsDao.createAdmin(req.body);
  res.json(insertedAdmin);
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

export default (app) => {
  app.post("/api/admins/register", register);
  app.post("/api/admins/login", login);

  app.post('/api/admins', createAdmin);
  app.get('/api/admins', findAllAdmins);
  app.put('/api/admins/:aid', updateAdmin);
  app.delete('/api/admins/:aid', deleteAdmin);
};
