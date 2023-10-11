import express from 'express';
import connectDB from '../config/db.js';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
