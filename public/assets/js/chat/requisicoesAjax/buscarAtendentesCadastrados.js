export function buscarTodosAtendentes(ip_servidor) {
  let atendentes = null;

  var settings = {
    url: `${ip_servidor}/buscarTodosAtendentes`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    atendentes = response;
  });

  return atendentes;
}
