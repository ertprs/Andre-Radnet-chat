export function buscarDepartamentos(ip_servidor) {
  let departamentos = null;

  var settings = {
    url: `${ip_servidor}/buscarDepartamentos`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    departamentos = response;
  });

  return departamentos;
}
