const funcoes = require("../funcoes/funcoes");
const Atendente = require("../models/atendente");
require("dotenv").config();

module.exports = (app) => {
  app.get("/logout", function (req, res) {
    funcoes.logout();
    res.redirect("/");
  });

  app.post("/conectar", async function (req, res) {
    let QrCode = await funcoes.conectar(req.query.sessao, req.query.fone);

    res.status(200).json(QrCode);
  });

  app.get("/", function (req, res) {
    res.render("pages/login");
  });

  app.post("/", async function (req, res) {
    let email = req.body.email;
    let senha = req.body.password;

    let login = await Atendente.buscarLogin(email, senha);

    console.log(login);
    console.log(email + " " + senha);

    if (email.length && senha.length) {
      if (!login.length) {
        res.redirect("/?erro=" + "nao foi possivel altenticar");
      } else {
        res.redirect("/home");
      }
    } else {
      res.redirect("/?erro=" + "preencha todos os campos");
    }
  });

  app.get("/home", function (req, res) {
    res.render("pages/home");
  });
};
