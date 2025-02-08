export const config = {
  server: {
    port: process.env.PORT || 3000,  // Keep 3000 for local development
  },
  cors: {
    origins: ['http://localhost:5173', 'https://triplesweep.com'],
  }
}; 