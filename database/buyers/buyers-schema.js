import mongoose from 'mongoose';
const buyersSchema = mongoose.Schema({
  role: String,
  userName: String,
  // hidden
  password: String,
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  // orders: order,


}, {collection: 'buyers'});

export default buyersSchema;