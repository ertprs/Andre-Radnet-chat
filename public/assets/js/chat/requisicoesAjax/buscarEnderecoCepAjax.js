export function buscarEnderecoCepAjax(cep) {
  let endereco = null;

  var settings = {
    url: `viacep.com.br/ws/${cep}/json/`,
    method: "GET",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    endereco = response;
  });

  return endereco;
}
