const express = require('express')
const app = express()
const port = process.env.PORT || 3010,
const finserv = require('./controllers/finserv')
const calculator = require('./controllers/calculator')
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
 // var amount =  fs.invetment(1000);
  res.end("Hello World");
});

app.get('/inv/:inv_amt', finserv.investment);

app.get('/investment:user_id', (req, res) => {
  var amount =  invetment(id);
  res.end("Hello World");
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
