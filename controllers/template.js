const funcoes = require("../funcoes/funcoes");
const Atendente = require("../models/atendente");
const Logados = require("../models/logados");
require("dotenv").config();

module.exports = (app) => {
  app.get("/logout", async function (req, res) {
    funcoes.logout();
    let logado = await funcoes.retornarUsuarioLogado();
    console.log(logado);
    Logados.mudarStatus({ status: "desconectado" }, logado[0].nome);
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

    if (email.length && senha.length) {
      let usuarioLogando = login[0];

      if (!login.length) {
        res.redirect("/?erro=" + "nao foi possivel altenticar");
      } else {
        funcoes.inserirUsuarioLogado(login);
        Logados.inserirUsuarioLogado({
          atendente: usuarioLogando.nome,
          status: "logado",
          id_atendente: usuarioLogando.id,
        });
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
