export function excluirCanalAjax(ip_servidor, idCanal) {
  var settings = {
    url: `${ip_servidor}/excluirCanal?fone=${idCanal}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
