export function buscarMensagensSistemaAjax(ip_servidor, id) {
  let mensagem = null;
  var settings = {
    url: `${ip_servidor}/pegarMensagens?id=${id}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    mensagem = response;
  });

  return mensagem;
}
