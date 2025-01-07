// Runs compressed production build in /dist
// npm run build:server
import http from 'node:http';
import path from 'node:path';
import compression from 'compression';
import express from 'express';
import { rateLimit } from 'express-rate-limit';

const app = express();
const PORT = process.env.PORT || 8080;
const DIST_DIR = path.resolve('dist');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: 'Too many requests from this IP, please try again after 15 minutes',
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many requests, please try again later.',
      retryAfter: Math.ceil(req.rateLimit.resetTime - Date.now()) / 1000
    });
  }
});

app.use(limiter);
// Enable gzip compression
app.use(compression());
// Serve static files from the dist directory
app.use(express.static(DIST_DIR));
// For any GET request, send index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});
// Create the server
const server = http.createServer(app);
// Start the server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
