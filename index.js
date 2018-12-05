var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// TODO: Add route here!
app.get('/', function (request, response) {
    // render the views/index.ejs template file
    response.json({message: 'Hey there!'})
});

var port = 4000;
app.listen(port, function () {
    console.log('Server running on http://localhost:' + port)
});


