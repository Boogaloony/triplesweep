export const config = {
  server: {
    port: process.env.PORT || 3000,  // Keep 3000 for local development
  },
  cors: {
    origins: [
      'http://localhost:5173',           // Vite dev server
      'https://triplesweep.com',         // Production frontend
      'http://localhost:3000',           // Local backend
      'http://triplesweep-prod.eba-zv2jwdiv.ap-southeast-2.elasticbeanstalk.com'  // EB backend
    ],
  }
}; 