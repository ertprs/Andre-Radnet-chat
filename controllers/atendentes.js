const funcoes = require("../funcoes/funcoes");
const Atendente = require("../models/atendente");
require("dotenv").config();

module.exports = (app) => {
  app.get("/atendentes", async function (req, res) {
    let todosAtendentes = await Atendente.buscarTodosAtendentes();
    console.log(todosAtendentes.length);

    res.render("pages/atendentes/atendentes", {
      atendente: todosAtendentes,
      registros: todosAtendentes.length,
      ip_servidor: process.env.IP_SERVIDOR,
    });
  });

  app.post("/atendentes-cadastrar", async function (req, res) {
    console.log(req.query);
    await Atendente.cadastrarAtendente(req.query);

    res.status(200).json("cadastro feito com sucesso");
  });
};
