export function conectar(ip_servidor, editarCanal) {
  var settings = {
    url: `${ip_servidor}/conectar?sessao=${editarCanal.nome}&fone=${editarCanal.fone_anterior}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    return response;
  });
}
