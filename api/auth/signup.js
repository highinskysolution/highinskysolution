import { connectDB } from '../lib/db';
import User from '../models/User';
import crypto from 'crypto';

const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Name, email, and password are required.' });
  }

  try {
    await connectDB();

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email is already registered.' });
    }

    const hashedPassword = hashPassword(password);
    const newUser = new User({
      name,
      email: email.toLowerCase(),
      password: hashedPassword
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: 'Registration successful!',
      user: {
        name: newUser.name,
        email: newUser.email
      }
    });

  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ success: false, message: error.message || 'Server error during signup.' });
  }
}
