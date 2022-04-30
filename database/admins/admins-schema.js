import mongoose from 'mongoose';
const adminsSchema = mongoose.Schema({
  userName: {type: String, unique: true},
  role: {type: String, default: 'ADMIN'},
  level: Number,
  // hidden 
  password: String,
  firstName: {type: String, default: ''},
  lastName: {type: String, default: ''},
  phoneNumber: {type: String, default: ''},
}, {collection: 'admins'});

export default adminsSchema;