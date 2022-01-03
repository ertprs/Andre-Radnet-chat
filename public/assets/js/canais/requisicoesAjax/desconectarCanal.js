export function desconectarCanal(ip_servidor, item) {
  var settings = {
    url: `${ip_servidor}/desconectarCanal?status=desconectado&fone=${item.id}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
