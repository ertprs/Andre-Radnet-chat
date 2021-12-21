const Chat = require("../models/chat");
const funcoes = require("../funcoes/funcoes");
const Mensagens = require("../models/Mensagens");
const Atendente = require("../models/atendente");
const Notificacao = require("../models/notificacoes");
require("dotenv").config();

module.exports = (app) => {
  // Rota de carregar o chat
  app.get("/chat", function (req, res) {
    console.log("api /chat");
    // informações básicas para carregar o topo da aplicação vindas do dotenv
    let numeroAtendente = process.env.NUMERO_ATENDENTE;
    let canal = process.env.CANAL;
    let protocolo = process.env.PROTOCOLO;
    let conectado = process.env.TEL_FONE_CONECTADO;

    let ip_servidor = process.env.IP_SERVIDOR;

    // passando as informações para o front
    // rederizando o front pelo ejs
    res.render("pages/chat/index", {
      canal: canal,
      protocolo: protocolo,
      numeroAtendente: numeroAtendente,
      conectado: conectado,
      ip_servidor: ip_servidor,
    });
  });

  // Rota para enviar mensagens do front
  app.post("/enviar", function (req, res) {
    console.log("api /enviar");
    funcoes.enviarMensagem(req.query);
    const mensagem = req.query;
    Chat.mensagem(mensagem);
    console.log(req.query);
    res.status(200).json("mensagem enviada");
  });

  /*
  app.post("/sendmessagebutton", function (req, res) {
    functions.sendmessagebutton();

    res.status(200).json("ok");
  });
*/

  // Faz a busca das mensagens no chat
  app.post("/recuperarMensagens", async function (req, res) {
    console.log("api /recuperarMensagens");
    let mensagens = await Mensagens.buscarMessages(
      req.query.toNumber,
      process.env.TEL_FONE_CONECTADO
    );
    //let mensagens = Messages.retornarDados();

    // faz o envio das mensagens para o front
    await funcoes.mensagensAnteriores(mensagens);
    res.status(200).json(mensagens);
  });

  //
  app.post("/carregarConversas", async function (req, res) {
    console.log("api /carregarConversas");
    let conversas = await Mensagens.buscarConversasNumero(
      process.env.TEL_FONE_CONECTADO
    );
    //let conversas = Messages.retornarConversas();
    res.status(200).json(conversas);
  });

  /*
  app.post("/carregarAtendente", function (req, res) {
    Atendente.buscarAtendente(req.query);
    let atendente = Atendente.retornarAtendente();
    res.status(200).json(atendente);
  });
  */

  app.post("/inserirNotificacoes", function (req, res) {
    Notificacao.inserirNotificacao(req.query);
    console.log(req.query);
    res.status(200).json(req.query);
  });

  app.post("/removerNotificacao", async function (req, res) {
    Notificacao.removerNotificacoes(req.query.fone);
    res.status(200).json("notificacoes removidas com sucesso");
  });

  app.post("/contarNotificacoes", async function (req, res) {
    let mensagens = await Notificacao.contarNotificacoes();
    res.status(200).json(mensagens);
  });
};
