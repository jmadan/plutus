import express from 'express'
import cheerio from 'cheerio'
import morgan from 'morgan'
const rp = require("request-promise")
const path = require('path')
import cors from 'cors'
import bodyParser from 'body-parser'
const compression = require('compression');

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use(
    morgan(':method :url :status :res[content-length] kb - :response-time ms'),
);

app.use(compression())

app.use(function (err, req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    console.error(err); // eslint-disable-line
    console.error(err.stack); // eslint-disable-line
    res.status(err.status || 500).send(err.message || 'Internal server error.');
    next();
})

const PORT = process.env.PORT || 8080

app.use(express.static(path.resolve(__dirname, "app")));

app.get('*', (request, response) => {
    // response.setHeader("Content-Type", "text/html");
    const options = {
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true,
      },
    };
    response.sendFile(path.resolve(__dirname, "app", "index.html"), options); // eslint-disable-line
  });

app.listen(PORT, () => {
    console.log(`Plutus listening on port ${PORT}!`)
})