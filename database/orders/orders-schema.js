import mongoose from 'mongoose';
const schema = mongoose.Schema({
  buyerId: Number,
  shippingAddress: String,
  orderTime: Date,
  delivered: Boolean,
  productId: Number,
  productName: String,
  productBrand: String,
  productImage: String,
  price: Number,
}, {collection: 'orders'});
export default schema;