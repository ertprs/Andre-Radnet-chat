export function enviarMensagem(
  ip_servidor,
  session,
  author,
  to_number,
  message,
  type,
  created_at,
  protocoloNumero
) {
  var settings = {
    url: `${ip_servidor}/enviar?session=${session}&from_number=${author}&to_number=${to_number}&content=${message}&type=${type}&created_at=${created_at}&id_protocolo=${protocoloNumero}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
