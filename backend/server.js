import express from 'express';
import dotenv from 'dotenv';
import app from './src/app.js';
import connectDB from './src/config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();

const PORT = process.env.PORT || 3000;

await connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
