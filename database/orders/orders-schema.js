import mongoose from 'mongoose';
const schema = mongoose.Schema({
  orderNumber: Number,
  orderTime: Date,
  deliveredTime: Date,
  buyerId: Number,
  shippingAddress: String,
  productId: Number,
  productName: String,
  productBrand: String,
  productImage: String,
  unitPrice: Number,
  quantity: Number,
  totalPrice: Number,
}, {collection: 'orders'});
export default schema;