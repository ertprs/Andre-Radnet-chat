const Atendente = require("../models/atendente");

module.exports = (app) => {
  app.get("/:id", async function (req, res) {
    res.render("pages/perfil/perfil", { id: req.params.id });
  });

  app.post("/excluir-atendente", async function (req, res) {
    console.log(req.query);
    await Atendente.excluirAtendente(req.query.id);

    res.status(200).json("exclusao feito com sucesso");
  });
};
