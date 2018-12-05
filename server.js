var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var db = require('./database');

app.post('/', function (request, response) {
    var query = request.body.query;
    console.log('Query: ' + query);
    try {
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
app.listen(port, function () {
    console.log('Server running on http://localhost:' + port)
});


