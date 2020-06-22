const express = require('express');
const http = require('http');

const hostName = 'localHost';
const port = 3000;

const app = express(); //telling our application is going to use express

//next is optional
app.use((req, res, next) => {
  console.log(req.header);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text,html');
  res.end('<html><body><h1>This is a Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostName, () => {
  console.log(`Surver Running at http://${hostName}:${port}`);
});
