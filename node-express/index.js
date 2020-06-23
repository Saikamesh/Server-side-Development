const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const hostName = 'localHost';
const port = 3000;

const app = express(); //telling our application is going to use express
app.use(morgan('dev')); //development version
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/dishes/:dishId', dishRouter);

app.use('/promotions', promoRouter);
app.use('/promotions/:promoId', promoRouter);

app.use('/leaders', leaderRouter);
app.use('/leaders/:leaderId', leaderRouter);

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
