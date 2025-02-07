import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
  ssl: {
    rejectUnauthorized: false
  }
});

// Create tables if they don't exist
export const initDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS pictures (
        id SERIAL PRIMARY KEY,
        url VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Database initialized');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};