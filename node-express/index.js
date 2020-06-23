const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostName = 'localHost';
const port = 3000;

const app = express(); //telling our application is going to use express
app.use(morgan('dev')); //development version
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/dishes', (req, res, next) => {
  res.end('will send all the dishes to you!');
});

app.post('/dishes', (req, res, next) => {
  res.end(
    'Will add the dish: ' +
      req.body.name +
      ' with details: ' +
      req.body.description
  );
});

app.put('/dishes', (req, res, next) => {
  res.statusCode = 403;
  res.end('Put Operation not supported on dishes');
});

app.delete('/dishes', (req, res, next) => {
  res.end('Deleting all the dishes!');
});

app.get('/dishes/:dishId', (req, res, next) => {
  res.end('will send details of the dish ' + req.params.dishId + ' to You!');
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end('Post Operation not supported on /dishes/' + req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end(
    'Will update the dish: ' +
      req.body.name +
      ' with details: ' +
      req.body.description
  );
});

app.delete('/dishes/:dishId', (req, res, next) => {
  res.end('deleting dish: ' + req.params.dishId);
});

app.use(express.static(__dirname + '/public'));

//next is optional
app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text,html');
  res.end('<html><body><h1>This is a Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostName, () => {
  console.log(`Surver Running at http://${hostName}:${port}`);
});
