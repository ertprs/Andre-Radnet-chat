export function pesquisarEnderecoClienteAjax(ip_servidor, contato) {
  let infoCliente = null;
  var settings = {
    url: `${ip_servidor}/pesquisarEnderecoCliente?contato=${contato}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    infoCliente = response;
  });
  return infoCliente;
}
