'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var formidable = require('formidable');

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: 'false'}))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});
app.post("/api/fileanalyse", (req, res)=>{
  formidable.IncomingForm().parse(req, (err, fields, files) => {
    res.json({"size":files.upfile.size + " bytes", "name":files.upfile.name});
  });
});

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
