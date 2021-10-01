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

app.get('/inv_prop/:salary/:age', finserv.inv_prop);
app.get('/inv_cal/:inv_amnt/:age', finserv.inv_cal);

//app.get('/inv', finserv.investment);

/* app.get('/inv/:inv_amnt/:age', (req, res) => {
  var amount =  req.params.inv_amnt;
  var age =  req.params.age;
  res.end("Hello World: " + amount + ":" + age);
});

 app.get('/inv', (req, res) => {
  var amount =  req.query.inv_amnt;
  var age =  req.query.age;
  res.end("Hello World: " + amount + ":" + age);
}); */

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
