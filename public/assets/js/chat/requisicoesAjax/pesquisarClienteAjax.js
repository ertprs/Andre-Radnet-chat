export function pesquisarClienteAjax(ip_servidor, contato) {
  let cliente = null;
  var settings = {
    url: `${ip_servidor}/pesquisarCliente?contato=${contato}`,
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
