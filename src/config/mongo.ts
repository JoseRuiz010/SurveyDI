import mongoose, { Error } from 'mongoose'
  
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydb', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
          });
          console.log('MongoDB connected');
    } catch (error) {
        if(error instanceof Error){
            console.error(error.message);
        }
    }
}
export default connectDB;
