const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

// Initialize the Next.js app
const app = next({ dev, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  });

  // Track all active connections
  const connections = new Set();
  
  server.on('connection', (connection) => {
    connections.add(connection);
    connection.on('close', () => {
      connections.delete(connection);
    });
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

  // Force idle connections to close early
  server.keepAliveTimeout = 2000;
  server.headersTimeout = 2000;

  // Ultra-aggressive shutdown handling for LiteSpeed (lsnode) / Passenger
  let isShuttingDown = false;
  
  const shutdown = (signal) => {
    if (isShuttingDown) return;
    isShuttingDown = true;
    
    console.log(`${signal} signal received: forcefully closing HTTP server and ALL connections to prevent hanging lsnode processes.`);
    
    // 1. Instantly destroy all active sockets (prevents Keep-Alive from hanging the process)
    for (const connection of connections) {
      connection.destroy();
    }
    connections.clear();

    // 2. Close the server
    server.close(() => {
      console.log('HTTP server closed cleanly.');
      process.exit(0);
    });
    
    // 3. Fallback: Force kill immediately after 2 seconds if event loop is stuck
    setTimeout(() => {
      console.error('Forcing shutdown via process.exit(1) after timeout.');
      process.exit(1);
    }, 2000).unref();
  };

  // Trapping all possible signals from LiteSpeed, Passenger, and PM2
  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGQUIT', () => shutdown('SIGQUIT'));
  process.on('SIGUSR2', () => shutdown('SIGUSR2')); // Often used by nodemon/LiteSpeed
  process.on('SIGHUP', () => shutdown('SIGHUP'));
  
  // Catch unhandled errors that might leave the process in a broken zombie state
  process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    shutdown('uncaughtException');
  });
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    shutdown('unhandledRejection');
  });
});
