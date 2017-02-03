var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){
  var app = express();
  //necessário apenas na versão 3.x
  /*app.use(app.router);*/

  //variável de ambiente, middleware
  app.set('port', 3000);
  app.use(express.static('./public'));

  //middleware
  app.use(express.static('./public'));
  //conguração de template engines
  app.set('view engine', 'ejs');
  app.set('views','./app/views');

  //novos middlewares
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());

 //configuração express-load
 load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app)

  return app;  
};