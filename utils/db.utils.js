import mongoose from "mongoose";
import { config } from "../config/env.config.js";

const dbConnect = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    
    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected successfully`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default dbConnect;
