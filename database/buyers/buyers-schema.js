import mongoose from 'mongoose';
const buyersSchema = mongoose.Schema({
  userName: String,
  // hidden
  password: String,
  firstName: String,
  lastName: String,
  // orders: order,


}, {collection: 'buyers'});

export default buyersSchema;