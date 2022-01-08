export function criarClienteEnderecoAjax(
  ip_servidor,
  idCliente,
  idEndereco,
  contato
) {
  var settings = {
    url: `${ip_servidor}/criarClienteEndereco?id_cliente=${idCliente}&id_endereco=${idEndereco}&contato=${contato}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
