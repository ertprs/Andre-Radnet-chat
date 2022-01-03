export function criarProtocolo(
  ip_servidor,
  session,
  to_number,
  protocoloNumero,
  author
) {
  var settings = {
    url: `${ip_servidor}/criarProtocolo?nome=${session}&contato=${to_number}&email&empresa&protocolo=${protocoloNumero}&situacao="aberto"&canal=${author}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
