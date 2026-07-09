import mongoose from 'mongoose';
import dns from 'dns';

// Force DNS resolution prioritizing IPv4 first to bypass Node v18+ IPv6 connection bugs
if (typeof dns.setDefaultResultOrder === 'function') {
  dns.setDefaultResultOrder('ipv4first');
}

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
