export function pesquisarEnderecoAjax(ip_servidor, id) {
  let endereco = null;
  var settings = {
    url: `${ip_servidor}/pesquisarEndereco?id=${id}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    endereco = response;
  });

  return endereco;
}
