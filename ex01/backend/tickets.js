import mongoose from 'mongoose'

const ticketsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	}
});

export default ticketsSchema;
