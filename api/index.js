import express from 'express';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

connectDB();

const port = process.env.PORT || 5000;

const startServer = async () => {
	try {
		await connectDB();
		console.log('MongoDb Connected');
		app.listen(port, () => console.log(`Server running on port ${port}`));
	} catch (error) {
		console.log(error);
	}
};
startServer();
