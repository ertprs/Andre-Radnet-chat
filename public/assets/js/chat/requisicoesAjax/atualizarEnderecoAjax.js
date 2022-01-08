export function atualizarEnderecoAjax(ip_servidor, id, endereco) {
  var settings = {
    url: `${ip_servidor}/atualizarEndereco?id=${id}&cep=${endereco.cep}&logradouro=${endereco.logradouro}&numero=${endereco.numero}&complemento=${endereco.complemento}&cidade=${endereco.cidade}&estado=${endereco.estado}&pais=${endereco.pais}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
