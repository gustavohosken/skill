var express = require('express');
var app = express();
var users = [
  {
    "nome" : "Gustavo",
    "idade" : 21
  },
  {
    "nome" : "Biris",
    "idade" : 22
  }
]

app.get('/', function(req, res){
  res.send(users);
});

app.listen(9000);
