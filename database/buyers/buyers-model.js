import mongoose from 'mongoose';
import buyersSchema from './buyers-schema.js'
const buyersModel = mongoose
.model('BuyerModel', buyersSchema);
export default buyersModel;