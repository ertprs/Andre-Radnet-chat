export function pesquisarClienteAjax(ip_servidor, id) {
  let cliente = null;
  var settings = {
    url: `${ip_servidor}/pesquisarCliente?id=${id}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    cliente = response;
  });

  return cliente;
}
