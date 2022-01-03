export function cadastrarCanalAjax(ip_servidor, nome, numero, status) {
  var settings = {
    url: ` ${ip_servidor}/cadastrarCanal?nome=${nome}&fone=${numero}&status=${status}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
