import { connectDB } from '../lib/db.js';
import User from '../models/User.js';

// Hardcoded admin credentials - never exposed to client
const ADMIN_KEY = 'hiss-admin-2024';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-key');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // Validate admin key from header
  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== ADMIN_KEY) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectDB();
    const users = await User.find({}, 'name createdAt').sort({ createdAt: -1 });
    return res.status(200).json({ success: true, members: users });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
