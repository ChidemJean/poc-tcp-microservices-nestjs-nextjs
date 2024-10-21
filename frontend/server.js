const { createServer } = require('http');
const next = require('next');
const startTcpServer = require('./tcp-server');
const WebSocket = require('ws');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Servidor HTTP Next.js rodando na porta 3000');
  });

  // WEBSOCKET ==============================================
  const wss = new WebSocket.Server({ port: 8083 });
  const clients = new Set();
  wss.on('connection', (ws) => {
    console.log('Cliente WebSocket conectado');
    clients.add(ws);

    ws.on('close', () => {
      console.log('Cliente WebSocket desconectado');
      clients.delete(ws);
    });
  });
  const broadcast = (message) => {
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  };
  // WEBSOCKET ==============================================

  startTcpServer({
    onData: (data) => {
      const buffer = Buffer.from(data, 'utf-8');
      broadcast(buffer);
    }
  })
});
