const express = require('express')
const app = express()
const port = process.env.PORT || 3010
const finserv = require('./controllers/finserv')
const calculator = require('./controllers/calculator')
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
 // var amount =  fs.invetment(1000);
  res.end("Hello World");
});

// getting proposed investment amount
app.get('/inv_prop/:salary/:age', finserv.inv_prop);

// getting investment proposal details
app.get('/inv_cal/:inv_amnt/:age', finserv.inv_cal);

// Similar calls to be made for other calculators as per need

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
