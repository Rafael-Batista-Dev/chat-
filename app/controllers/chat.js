module.exports.iniciaChat = function(application, req, res) {
  var dadosForm = req.body;
  req.assert("apelido", "Nome ou Apelido é obrigratório").notEmpty();
  req
    .assert("apelido", "Nome ou apelido deve conter entre 3 à 15 caracteres")
    .isLength(3, 15);
  var erros = req.validationErrors();

  if (erros) {
    res.render("index", { validacao: erros });
    return;
  }

  application.get("oi").emit("msgUser", {
    apelido: dadosForm.apelido,
    mensagem: "Acabou de entrar no chat"
  });

  res.render("chat", { dadosForm: dadosForm });
};
