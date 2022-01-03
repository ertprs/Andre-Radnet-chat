export function buscarCanaisAtivos(ip_servidor) {
  let canais = null;

  var settings = {
    url: `${ip_servidor}/buscarCanaisAtivos`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    canais = response;
  });

  return canais;
}
