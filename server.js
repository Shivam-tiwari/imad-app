var express = require('express');
var morgan = require('morgan');//morgan is for handling o/p logs of server
var path = require('path');//

var app = express();
app.use(morgan('combined'));

var counter=0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/art-1.html',function(req,res){
  res.sendFile(path.join(__dirname,'ui','art-1.html'));    
});

app.get('/ui/shivam.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'shivam.jpg'));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
