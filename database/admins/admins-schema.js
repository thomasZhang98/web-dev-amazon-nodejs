import mongoose from 'mongoose';
const adminsSchema = mongoose.Schema({
  userName: String,
  level: Number,
  // hidden 
  password: String,
  firstName: String,
  lastName: String,


}, {collection: 'admins'});

export default adminsSchema;