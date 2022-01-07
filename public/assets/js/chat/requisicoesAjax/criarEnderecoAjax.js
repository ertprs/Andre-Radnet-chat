export function criarEnderecoAjax(ip_servidor, endereco) {
  let id_insert = null;
  var settings = {
    url: `${ip_servidor}/criarEndereco?cep=${endereco}&logradouro=${endereco}&numero=${endereco}&bairro=${endereco}&complemento=${endereco}&cidade=${endereco}&estado=${endereco}&pais=${endereco}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    id_insert = response;
  });

  return id_insert;
}
