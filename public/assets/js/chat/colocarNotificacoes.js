import { contarNotificacoes } from "./requisicoesAjax/contarNotificacoes.js";

export function colocarNotificacoes() {
  let notificacoes = document.querySelectorAll(".clientesConversa");
  let BDnotificacoes;

  BDnotificacoes = contarNotificacoes(ip_servidor);

  notificacoes.forEach((element) => {
    for (let index = 0; index < BDnotificacoes.length; index++) {
      console.log(element.id);
      console.log(BDnotificacoes[index].fone);

      let toFromId = element.id.split("-");

      if (toFromId.includes(BDnotificacoes[index].fone)) {
        let notify = `   
          <div class="notification-contact">
              <p class="bg-danger pt-1 pb-1 ps-2 pe-2"
              style="position: absolute; margin-left: -34px; margin-top: -2px; border-radius: 3px; color: white;font-size: 8pt;">
              <strong class="qtd-notification">${BDnotificacoes[index].notificacoes}</strong>
              </p>
          </div>`;

        $(element).append(notify);
      }
    }
  });
}
