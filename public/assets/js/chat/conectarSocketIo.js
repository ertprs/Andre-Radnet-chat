import { renderMessage } from "./renderMensagens.js";
import { renderResponder } from "./renderResponder.js";
import { mostrarEsconderOpcoes } from "./mostrarEsconderOpcoes.js";
import { copiarMensagem } from "./copiarMensagem.js";
import { responderMensagem } from "./responderMensagem.js";

export default class Socket {
  socket = null;
  notificacoesBD = null;

  conectarSocketIo(ip_servidor, conversas, retornar) {
    //função para conectar com o socket.io
    this.socket = io(ip_servidor); //colocar o ip do servidor na porta 3000

    this.socket.on("previousMessages", function (messages) {
      console.log("socket / previousMessages");

      const div = $("#mensagens-chat");
      div.empty();

      for (let index = 0; index < messages.length; index++) {
        renderMessage(
          messages[index],
          "funcionario",
          retornar.retornarNumero()
        );
      }

      mostrarEsconderOpcoes();
      copiarMensagem();
      responderMensagem();
    });

    this.socket.on("wppMessage", function (message) {
      console.log("socket / wppmessage");

      let numeroDestinatario = message.author;

      let numeroClicado = retornar.retornarNumero();

      // limpa chat
      const div = $("#conversas-chat");
      div.empty();

      conversas.procurarUltimasConversas(ip_servidor);
      let chatConversas = conversas.retornarUltimasConversas();
      conversas.renderUltimasConversas(chatConversas);
      conversas.adicionarEventoConversa(ip_servidor, retornar);

      var settings = {
        url: `${ip_servidor}/contarNotificacoes`,
        method: "POST",
        timeout: 0,
        async: false,
      };

      let BDnotificacoes;

      $.ajax(settings).done(function (response) {
        console.log(response);
        BDnotificacoes = response;
      });

      this.notificacoesBD = BDnotificacoes;

      // notificação
      if (numeroClicado == numeroDestinatario) {
        renderMessage(message, "wppMessage");
      } else {
        let notificacoes = document.querySelectorAll(".clientesConversa");

        notificacoes.forEach((element) => {
          // Por padrão ele vem com o valor 1

          for (let index = 0; index < this.notificacoesBD.length; index++) {
            if (this.notificacoesBD[index].fone == element.id) {
              let notify = `   
              <div class="notification-contact">
                  <p class="bg-danger pt-1 pb-1 ps-2 pe-2"
                  style="position: absolute; margin-left: -34px; margin-top: -2px; border-radius: 3px; color: white;font-size: 8pt;">
                  <strong class="qtd-notification">${this.notificacoesBD[index].notificacoes}</strong>
                  </p>
              </div>`;

              $(element).append(notify);
            }
          }
        });
      }
      // notificação

      mostrarEsconderOpcoes();
      copiarMensagem();
      responderMensagem();
    });
  }

  retornarSocket() {
    return this.socket;
  }
}
