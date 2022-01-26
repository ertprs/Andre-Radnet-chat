import { renderMessage } from "./renderMensagens.js";
import { renderResponder } from "./renderResponder.js";
import { mostrarEsconderOpcoes } from "./mostrarEsconderOpcoes.js";
import { copiarMensagem } from "./copiarMensagem.js";
import { responderMensagem } from "./responderMensagem.js";
import { executarAudioRecebimento } from "./executarAudioRecebimento.js";
import { contarNotificacoes } from "./requisicoesAjax/contarNotificacoes.js";

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
          retornar.retornarNumero().conectado,
          messages[index].type
        );
      }

      mostrarEsconderOpcoes();
      copiarMensagem();
      responderMensagem();
    });

    this.socket.on("sendMessage", (data) => {
      console.log(data);
      socket.broadcast.emit("receivedMessage", data);
    });

    this.socket.on("wppMessage", function (message) {
      console.log("socket / wppmessage");

      let numeroDestinatario = message.author;

      //console.log(retornar.retornarNumero());
      let numeroClicado = null;
      let BDnotificacoes;

      if (retornar.retornarNumero() === null) {
        numeroClicado = null;
      } else {
        numeroClicado = retornar.retornarNumero().cliente;
      }

      // limpa chat
      const div = $("#conversas-chat");
      div.empty();

      conversas.procurarUltimasConversas(ip_servidor);
      let chatConversas = conversas.retornarUltimasConversas();
      conversas.renderUltimasConversas(chatConversas);
      conversas.adicionarEventoConversa(ip_servidor, retornar);

      BDnotificacoes = contarNotificacoes(ip_servidor);

      this.notificacoesBD = BDnotificacoes;

      // notificação
      if (numeroClicado == numeroDestinatario) {
        renderMessage(message, "wppMessage");
        mostrarEsconderOpcoes();
        copiarMensagem();
        responderMensagem();
      } else {
        let notificacoes = document.querySelectorAll(".clientesConversa");

        notificacoes.forEach((element) => {
          // Por padrão ele vem com o valor 1

          for (let index = 0; index < this.notificacoesBD.length; index++) {
            const toFromId = element.id.split("-");

            if (toFromId.includes(this.notificacoesBD[index].fone)) {
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
      executarAudioRecebimento();
    });
  }

  retornarSocket() {
    return this.socket;
  }
}
