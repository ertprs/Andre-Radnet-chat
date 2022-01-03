export function buscarProtocolo(ip_servidor, to_number) {
  let protocoloAtendimento = null;

  var settings = {
    url: `${ip_servidor}/buscarProtocolo?fone=${to_number}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    protocoloAtendimento = response;
  });

  return protocoloAtendimento;
}
