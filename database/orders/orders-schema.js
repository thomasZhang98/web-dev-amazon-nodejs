import mongoose from 'mongoose';
const schema = mongoose.Schema({
  buyerId: String,
  shippingAddress: String,
  orderTime: Date,
  productId: Number,
  productName: String,
  productBrand: String,
  productImage: String,
  price: Number,
}, {collection: 'orders'});
export default schema;