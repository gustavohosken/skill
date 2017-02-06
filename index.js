var express = require('express');
var app = express();
var users = [
  {
    "nome" : "Gustavo",
    "idade" : 21,
    "habilidades" : [{"nome":"Design"},{"":"Javascript"}]
  },
  {
    "nome" : "Biris",
    "idade" : 22,
    "habilidades" : [{"nome":"Javascript"}]
  }
]

app.get('/', function(req, res){
  res.send(users);
});

app.listen(9000);
