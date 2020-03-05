//Importação do modulo express
var express = require("express");

//Importação do modulo express-validator
var expressValidator = require("express-validator");

//Importação do modulo consign
var consign = require("consign");

//Importação do modulo body-parser
var bodyParser = require("body-parser");

//Iniciando o objeto express
var app = express();

//Setando as variáveis "view engine" e "views" do express
app.set("view engine", "ejs");
app.set("views", "./app/views");

//Configurando o middleware express.static
app.use(express.static("./app/public"));

//Configurando o middleware bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

//Configurando o middleware express-validator
app.use(expressValidator());

//Configurando o consign para auto load das rotas, controles e modulos
consign()
  .include("app/routes")
  .then("app/models")
  .then("app/controllers")
  .into(app);

//Exportando o objeto express
module.exports = app;
