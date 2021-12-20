const funcoes = require("../funcoes/funcoes");
const Atendente = require("../models/atendente");
require("dotenv").config();

module.exports = (app) => {
  app.get("/logout", function (req, res) {
    funcoes.logout();
    res.redirect("/");
  });

  app.post("/conectar", function (req, res) {
    //console.log(req.query);

    funcoes.conectar();

    res.redirect("/home");
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

  app.get("/atendentes", async function (req, res) {
    let todosAtendentes = await Atendente.buscarTodosAtendentes();
    console.log(todosAtendentes.length);

    res.render("pages/atendentes", {
      atendente: todosAtendentes,
      registros: todosAtendentes.length,
    });
  });

  app.post("/atendentes-cadastrar", async function (req, res) {
    console.log(req.query);
    await Atendente.cadastrarAtendente(req.query);

    res.status(200).json("cadastro feito com sucesso");
  });

  app.get("/:id", async function (req, res) {
    res.render("pages/perfil", { id: req.params.id });
  });
};
