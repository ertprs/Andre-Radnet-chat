module.exports = (app) => {
  let logado = null;

  app.get("/home", function (req, res) {
    res.render("pages/home/home", {
      id: this.logado.id,
      nome: this.logado.nome,
    });
  });
};
