const http = require('http');
const fs = require('fs');
const path = require('path');






const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
};

const server = http.createServer((req, res) => {
  const urlPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, 'spa', urlPath);

  const getContentType = (extname) => mimeTypes[extname] || 'text/plain';

  const sendFile = (statusCode, contentType, data) => {
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(data);
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(__dirname, 'spa', 'index.html'), (err, data) => {
          if (err) {
            sendFile(500, 'text/plain', 'Erro interno do servidor\n');
          } else {
            sendFile(200, 'text/html', data);
          }
        });
      } else {
        sendFile(404, 'text/plain', 'Arquivo não encontrado\n');
      }
    } else {
      const extname = path.extname(filePath);
      const contentType = getContentType(extname);
      sendFile(200, contentType, data);
    }
  });
});

server.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
