import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cachedConnection = null;

export async function connectDB() {
  if (cachedConnection) return cachedConnection;
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables.");
  }
  
  cachedConnection = await mongoose.connect(MONGODB_URI);
  return cachedConnection;
}
