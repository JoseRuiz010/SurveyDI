import express from 'express';
import 'reflect-metadata';
import connectDb from './src/config/mongo'
import './src/containers';
import userRoutes from './src/routes/userRoutes';

const app = express();
app.use(express.json());
app.use('/api', userRoutes);
connectDb()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
