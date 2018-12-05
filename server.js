var express = require('express');
var util = require('util');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var db = require('./database');


app.post('/', function (request, response) {
    try {
        var dateTimeNow = new Date();
        var query = request.body.query;
        console.log(util.format('%s: Query: %s', dateTimeNow.toString(), query));
        db.any(query)
            .then(function (rows) {
                response.json(rows)
            })
            .catch(function (errors) {
                response.json(errors)
            });
    } catch (exception) {
        response.json(exception)
    }
});

var port = process.env.PORT;
// var port = 4000;
app.listen(port, function () {
    console.log('Server running on http://localhost:' + port)
});


