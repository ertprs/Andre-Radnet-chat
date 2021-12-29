export function colocarNotificacoes() {
  let notificacoes = document.querySelectorAll(".clientesConversa");

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

  notificacoes.forEach((element) => {
    for (let index = 0; index < BDnotificacoes.length; index++) {
      if (BDnotificacoes[index].fone == element.id) {
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
