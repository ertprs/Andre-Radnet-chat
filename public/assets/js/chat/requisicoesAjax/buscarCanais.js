export function buscarCanais(ip_servidor) {
  let removerCanais = null;

  var settings = {
    url: `${ip_servidor}/buscarCanais`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    removerCanais = response;
  });

  return removerCanais;
}
