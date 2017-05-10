var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

mongoose = require('mongoose'),
  Task = require('./api/models/blogmodel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/blogroutes');
routes(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    // res.render('index');
    res.send('Hello');
})

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function() {
    console.log('app running');
})