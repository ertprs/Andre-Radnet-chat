export function criarEnderecoAjax(ip_servidor, endereco) {
  let id_insert = null;
  var settings = {
    url: `${ip_servidor}/criarEndereco?cep=${endereco.cep}&logradouro=${endereco.logradouro}&numero=${endereco.numero}&bairro=${endereco.bairro}&complemento=${endereco.complemento}&cidade=${endereco.cidade}&estado=${endereco.estado}&pais=${endereco.pais}`,
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
