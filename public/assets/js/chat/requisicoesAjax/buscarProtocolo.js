export function buscarProtocolo(ip_servidor, origemDestino) {
  let protocoloAtendimento = null;

  var settings = {
    url: `${ip_servidor}/buscarProtocolo?fone=${origemDestino.from_number}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    protocoloAtendimento = response;
  });
}
