import mongoose from 'mongoose';
import adminsSchema from './admins-schema.js'
const adminsModel = mongoose
.model('AdminModel', adminsSchema);
export default adminsModel;