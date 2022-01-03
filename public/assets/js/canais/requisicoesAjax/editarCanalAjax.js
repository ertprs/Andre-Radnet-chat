export function editarCanalAjax(
  ip_servidor,
  nomeInput,
  foneInput,
  editarCanal
) {
  var settings = {
    url: `${ip_servidor}/editarCanal?nome=${nomeInput}&fone=${foneInput}&fone_anterior=${editarCanal.fone_anterior}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
