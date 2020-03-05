//Inportando as configurações do servidor
var app = require("./config/server");

//Parametro da prota
var server = app.listen(80, () => {
  console.log("Sever ON");
});
