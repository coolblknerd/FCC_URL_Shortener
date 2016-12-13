const express = require('express');

var app = express();

// Set the view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/:link', function(req, res){
   var url = req.params.link.toString()
   , encode = encodeURIComponent(url);
   
   console.log(encode);
   
   res.send({
      "original_url": encode,
      "short_url": 'test'
   });
   
   res.end();
});

app.listen(process.env.PORT || 8080, function(){
   console.log("I'm listening to port " + process.env.PORT || 8080); 
});