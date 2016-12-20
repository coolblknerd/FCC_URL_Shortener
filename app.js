const express = require('express'),
    url = require('url');

var app = express();

// Set the view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/:link*', function(req, res) {
    var param = req.url.slice(1, req.url.length),
        http = /https?\:\/\//;

    // http.test(param) --> used to check url against regEx

    if (http.test(param)) {
        res.send({
            "original_url": param,
            "short_url": 'test'
        });
    }
    else {
        res.send({
            "error": "URL invalid"
        });
    }



    res.end();
});

app.listen(process.env.PORT || 8080, function() {
    console.log("I'm listening to port " + process.env.PORT || 8080);
});