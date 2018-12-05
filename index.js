var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var db = require('./database');

// TODO: Add route here!
app.get('/', function (request, response) {
    var query = 'select * from store';
    db.any(query)
        .then(function (rows) {
            response.json(rows)
        })
        .catch(function (errors) {
            response.json(errors)
        })
});

var port = 4000;
app.listen(port, function () {
    console.log('Server running on http://localhost:' + port)
});


