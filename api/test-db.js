import mongoose from 'mongoose';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
      return res.status(200).json({
        success: false,
        error: "MONGODB_URI is not set in Vercel environment variables!"
      });
    }

    const maskedUri = MONGODB_URI.replace(/:([^@]+)@/, ":*****@");
    console.log(`[TEST-DB] Connecting with URI: ${maskedUri}`);

    // Attempt Mongoose Connection
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000
    });

    const readyState = mongoose.connection.readyState;
    const isConnected = readyState === 1;

    // Disconnect
    await mongoose.disconnect();

    return res.status(200).json({
      success: isConnected,
      message: isConnected ? "Connection to MongoDB Atlas succeeded from Vercel!" : "Connection failed",
      readyState,
      uri: maskedUri
    });

  } catch (error) {
    console.error("[TEST-DB] Connection error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || error,
      stack: error.stack,
      name: error.name
    });
  }
}
