const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
let db; 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

MongoClient.connect('mongodb://localhost:27017',
    { useUnifiedTopology: true },
    function(err,database){
        if (err) {
            console.log(err);
        } 
    app.listen(3012, function(err, database) {
        console.log('API started')
    });
});

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname + '/public'});
    console.log(__dirname);
});