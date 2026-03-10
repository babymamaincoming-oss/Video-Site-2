const http = require('http');
const fs = require('fs');
const path = require('path');

function resolvePort() {
  const raw = process.env.PORT;
  if (raw === undefined) return 3000;
  const parsed = Number(raw);
  if (!Number.isInteger(parsed) || parsed < 1 || parsed > 65535) {
    throw new Error(`Invalid PORT value: ${raw}`);
  }
  return parsed;
}

const PORT = resolvePort();
const HOST = process.env.HOST || '127.0.0.1';
const PUBLIC_DIR = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

function sendError(res, statusCode, message) {
  res.writeHead(statusCode, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(message);
}

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('File read error:', err);
      sendError(res, 500, 'Server error');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  let requestPath;
  try {
    requestPath = decodeURIComponent(req.url.split('?')[0] || '/');
  } catch {
    sendError(res, 400, 'Bad request');
    return;
  }

  const relativePath = requestPath === '/' ? '/index.html' : requestPath;
  const filePath = path.resolve(path.join(PUBLIC_DIR, relativePath));
  const relativeToPublic = path.relative(PUBLIC_DIR, filePath);

  if (relativeToPublic.startsWith('..') || path.isAbsolute(relativeToPublic)) {
    sendError(res, 403, 'Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      const status = err.code === 'ENOENT' ? 404 : 500;
      sendError(res, status, status === 404 ? 'Not found' : 'Server error');
      return;
    }

    if (!stats.isFile()) {
      sendError(res, 404, 'Not found');
      return;
    }

    serveFile(filePath, res);
  });
});

server.listen(PORT, HOST, () => {
  if (HOST === '0.0.0.0') {
    console.log(`Server running on all interfaces. Connect via http://localhost:${PORT} or your LAN IP.`);
  } else {
    console.log(`Server running at http://${HOST}:${PORT}`);
  }
});
