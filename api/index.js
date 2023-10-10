import express from 'express';
import connectDB from '../config/db.js';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.PORT);

const app = express();

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
