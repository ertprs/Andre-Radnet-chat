export function carregarConversas(ip_servidor) {
  let resposta = null;
  var settings = {
    url: `${ip_servidor}/carregarConversas`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    resposta = response;
  });

  return resposta;
}
