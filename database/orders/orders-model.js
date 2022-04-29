import mongoose from 'mongoose';
import ordersSchema from './orders-schema.js'
const ordersModel = mongoose
.model('OrderModel', ordersSchema);
export default ordersModel;