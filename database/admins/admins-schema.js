import mongoose from 'mongoose';
const adminsSchema = mongoose.Schema({
  userName: String,
  role: String,
  level: Number,
  // hidden 
  password: String,
  firstName: String,
  lastName: String,
  phoneNumber: Number,


}, {collection: 'admins'});

export default adminsSchema;