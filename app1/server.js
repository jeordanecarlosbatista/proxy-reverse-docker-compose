var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.json({ message: 'Hello World Application 01' });
});

app.get('/request-to-app2', function(req, res){
    
    var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://app2:3000/',
  headers: { }
};

axios(config)
.then(function (response) {
    res.json(JSON.stringify(response.data));
})
.catch(function (error) {
    res.json(JSON.stringify(error));
});

});


app.listen(3000, function() {
    console.log('Listening on port 3000!');
    console.log('http://localhost:3000');
});