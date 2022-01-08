export function criarClienteAjax(ip_servidor, cliente) {
  let idCliente = null;

  var settings = {
    url: `${ip_servidor}/criarCliente?nome=${cliente.nome}&contato=${cliente.contato}&segundoContato=${cliente.segundoContato}&email=${cliente.email}&empresa=${cliente.empresa}&anotacoes=${cliente.anotacoes}&id_endereco=${cliente.id_endereco}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    idCliente = response;
  });

  return idCliente;
}
