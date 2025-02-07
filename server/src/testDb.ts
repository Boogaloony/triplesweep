import { pool, initDb } from './db.ts';

async function testConnection() {
  try {
    // Test the connection
    const client = await pool.connect();
    console.log('Successfully connected to the database');
    
    // Initialize the database (create tables)
    await initDb();
    
    // Test a simple query
    const result = await client.query('SELECT NOW()');
    console.log('Database query successful:', result.rows[0]);
    
    client.release();
  } catch (error) {
    console.error('Database connection error:', error);
  } finally {
    // Close the pool
    await pool.end();
  }
}

testConnection();
