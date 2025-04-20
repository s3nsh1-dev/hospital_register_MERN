import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING || ""
    );
    console.info(`DB is connected: ${conn.connection.name}`);
  } catch (error: unknown) {
    console.error(`Error Connecting Database: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
