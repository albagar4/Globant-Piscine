import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config()

const DB_URI = process.env.MONGODB_URL;

module.exports = () => {
	const connect = {
		mongoose.connect (
			DB_URI,
			{
				keepAlive: true,
				useNewUrlParser: true,
				useUnifiedTopology: true
			},
			(err) => {
				if(err){
					console.log('DB: error')
				}
				else{
					console.log('Correct connexion')
				}
			}
		)
	}
	connect();
}