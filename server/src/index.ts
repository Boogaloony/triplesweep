import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import picturesRouter from './routes/pictures';
import { initDb, pool } from './db';
import { config } from './config/default';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: config.cors.origins,
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/pictures', picturesRouter);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Initialize database
initDb();

// Test route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Pictures routes
app.get('/api/pictures', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pictures ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching pictures:', error);
    res.status(500).json({ error: 'Failed to fetch pictures' });
  }
});

const PORT = config.server.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
}); 

console.log('Version: 2025-02-08-v1');