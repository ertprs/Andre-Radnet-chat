export function atualizarClienteEnderecoAjax(ip_servidor, id, contato) {
  var settings = {
    url: `${ip_servidor}/atualizarClienteEndereco?id=${id}&contato=${contato}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
