import mongoose from 'mongoose'
import ticketsSchema from "./tickets.js";

const ticketsModel = mongoose.model('ticketsModel', ticketsSchema);

export default ticketsModel;
