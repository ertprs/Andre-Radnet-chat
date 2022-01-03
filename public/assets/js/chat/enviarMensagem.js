import { renderMessage } from "./renderMensagens.js";
import { retornarSessao } from "./requisicoesAjax/retornarSessao.js";
import { buscarProtocolo } from "./requisicoesAjax/buscarProtocolo.js";
import { criarProtocolo } from "./requisicoesAjax/criarProtocolo.js";
import { enviarMensagemAjax } from "./requisicoesAjax/enviarMensagemAjax.js";
import { enviarMensagemInterna } from "./requisicoesAjax/enviarMensagemInterna.js";

export function enviarMensagem(numberDestino, ipSocket, ip_servidor) {
  $("#chat").submit(function (event) {
    event.preventDefault();

    let resposta = null;
    let protocoloCliente = null;

    console.log(numberDestino.retornarNumero());

    var author = numberDestino.retornarNumero().conectado;
    var message = $("input[name=texto]").val();
    var to_number = numberDestino.retornarNumero().cliente;

    let mensagensInternas = document.querySelector(".mensagens-internas");

    let mensagensInternasAtivado =
      mensagensInternas.classList.contains("ativado");

    var created_at = moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss");
    var conectado = numberDestino.retornarNumero().conectado;
    var protocoloNumero = moment(new Date().getTime()).format(
      "DDMMYYYYHHmmsss"
    );
    // retornar sessao
    resposta = retornarSessao(ip_servidor, conectado);

    var session = resposta[0].nome;

    if (message.length) {
      var messageObject = {
        author: conectado,
        message: message,
        session: resposta[0].nome,
      };

      renderMessage(messageObject, "browser", conectado);
      ipSocket.emit("sendMessage", messageObject);
    }

    protocoloCliente = buscarProtocolo(ip_servidor, to_number);

    if (!protocoloCliente.length) {
      //criarProtocolo

      criarProtocolo(ip_servidor, session, to_number, protocoloNumero, author);

      if (mensagensInternasAtivado === true) {
        var type = "interno";
        enviarMensagemInterna(
          ip_servidor,
          session,
          author,
          to_number,
          message,
          type,
          created_at,
          protocoloNumero
        );
        //criar função de envio de mensagens internas
      } else {
        var type = "chat";

        // enviar
        enviarMensagemAjax(
          ip_servidor,
          session,
          author,
          to_number,
          message,
          type,
          created_at,
          protocoloNumero
        );
      }

      document.getElementById("buscar").value = "";

      let notificacoes = document.querySelector(".notificacoes");

      if (notificacoes.classList.contains("text-danger")) {
      } else {
        let audio = new Audio("assets/audios/envio.mp3");

        audio.play();
      }
    } else {
      if (mensagensInternasAtivado === true) {
        var type = "interno";
        enviarMensagemInterna(
          ip_servidor,
          session,
          author,
          to_number,
          message,
          type,
          created_at,
          protocoloCliente[0].protocolo
        );
        //criar função de envio de mensagens internas
      } else {
        var type = "chat";

        // enviar
        enviarMensagemAjax(
          ip_servidor,
          session,
          author,
          to_number,
          message,
          type,
          created_at,
          protocoloCliente[0].protocolo
        );
      }

      document.getElementById("buscar").value = "";

      let notificacoes = document.querySelector(".notificacoes");

      if (notificacoes.classList.contains("text-danger")) {
      } else {
        let audio = new Audio("assets/audios/envio.mp3");

        audio.play();
      }
    }
  });
}
