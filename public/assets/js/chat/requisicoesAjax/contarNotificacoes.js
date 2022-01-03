export function contarNotificacoes(ip_servidor) {
  let BDnotificacoes = null;

  var settings = {
    url: `${ip_servidor}/contarNotificacoes`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    BDnotificacoes = response;
  });

  return BDnotificacoes;
}
