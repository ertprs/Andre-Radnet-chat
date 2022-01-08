export function atualizarClienteAjax(ip_servidor, id, cliente) {
  var settings = {
    url: `${ip_servidor}/atualizarCliente?id=${id}&nome=${cliente.nome}&segundoContato=${cliente.segundoContato}&email=${cliente.email}&empresa=${cliente.empresa}&anotacoes=${cliente.anotacoes}&id_endereco=${cliente.id_endereco}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
