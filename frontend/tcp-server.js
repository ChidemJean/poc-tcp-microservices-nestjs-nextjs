const tls = require('tls');
const fs = require('fs');
const net = require('net');

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem'),
// };

const startTcpServer = ({ onData, onEnd, onError }) => {
  const handleConnection = (socket) => {
    console.log('Cliente TLS conectado');

    socket.on('data', (data) => {
      console.log('Dados recebidos do cliente:', data.toString());
      if (onData) onData(data.toString().replace(/^\d+#\s*/, ''))
      socket.write('Dados recebidos com segurança');
    });

    socket.on('end', () => {
      if (onEnd) onEnd()
      console.log('Cliente desconectado');
    });

    socket.on('error', (err) => {
      if (onError) onError(err)
      console.error('Erro no socket:', err);
    });
  };

  const server = net.createServer(handleConnection);

  server.listen(process.env.TCP_PORT, (err) => {
    if (err) throw err;
    console.log(`Servidor TCP rodando na porta ${process.env.TCP_PORT}`);
  });
}

module.exports = startTcpServer;
