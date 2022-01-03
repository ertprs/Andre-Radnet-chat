export function retornarSessao(ip_servidor, conectado) {
  let resposta = null;
  var settings = {
    url: `${ip_servidor}/retornarSessao?fone=${conectado}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    resposta = response;
  });

  return resposta;
}
