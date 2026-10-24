const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  path: '/',
  allow_discovery: false,
  proxied: true,
  debug: false
});

app.disable('x-powered-by');
app.get('/health', (_req, res) => res.status(200).send('AlphaBlox online server is running.'));
app.use('/peerjs', peerServer);
app.use(express.static(__dirname));
app.get('*', (_req, res) => res.sendFile(require('path').join(__dirname, 'index.html')));

const port = Number(process.env.PORT || 3000);
server.listen(port, '0.0.0.0', () => {
  console.log(`AlphaBlox server listening on port ${port}`);
});
