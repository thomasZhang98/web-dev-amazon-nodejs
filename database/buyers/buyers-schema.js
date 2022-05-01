import mongoose from 'mongoose';
const buyersSchema = mongoose.Schema({
  userName: {type: String, unique: true},
  role: {type: String, default: 'BUYER'},
  bookmarks: {type: [String], default: []},
  // hidden
  password: String,
  firstName: {type: String, default: ''},
  lastName: {type: String, default: ''},
  phoneNumber: {type: String, default: ''}
}, {collection: 'buyers'});

export default buyersSchema;