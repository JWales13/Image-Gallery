var express = require('express');
var bodyParser = require('body-parser')

var images = require('./routes/send-images')

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));
var port = process.env.PORT || 5000;

app.use('/send-images',images);


app.listen(port, function(){
    console.log('listening on port 5000');
});