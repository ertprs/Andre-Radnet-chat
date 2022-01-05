export function criarTransferenciaAtendimentoAjax(ip_servidor, atendimento) {
  var settings = {
    url: `${ip_servidor}/transferirAtendimento?cliente=${atendimento.cliente}&requerente=${atendimento.requerente}&destino=${atendimento.destino}&mensagem=${atendimento.mensagem}&status=${atendimento.status}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
