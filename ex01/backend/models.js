import mongoose from 'mongoose'
const { ticketsSchema } = require('./tickets');

const ticketsModel = mongoose.model('Tickets', ticketsSchema);

module.exports = {
	ticketsModel
};
