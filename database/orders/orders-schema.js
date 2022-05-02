import mongoose from 'mongoose';
const schema = mongoose.Schema({
  buyerId: String,
  shippingAddress: {type: String, default: 'Home'},
  orderTime: Date,
  productId: String,
  productName: String,
  productBrand: String,
  productImage: String,
  price: Number,
}, {collection: 'orders'});
export default schema;