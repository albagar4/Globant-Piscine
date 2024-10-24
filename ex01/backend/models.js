import mongoose from 'mongoose'
import ticketsSchema from "./tickets.js";

const ticketsModel = mongoose.model('Tickets', ticketsSchema);

export default {
	ticketsModel
};
