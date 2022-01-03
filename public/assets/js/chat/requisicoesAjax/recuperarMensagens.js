export function recuperarMensagens(ip_servidor, origemDestino) {
  var settings = {
    url: `${ip_servidor}/recuperarMensagens?toNumber=${origemDestino.from_number}&fromNumber=${origemDestino.to_number}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
