export function iniciarNovoAtendimento() {
  let novoAtendimento = document.querySelector(".novoAtendimento");
  let sessao = null;

  novoAtendimento.addEventListener("click", () => {
    let canal = $("#selectCanal :selected").val();
    let fone = $("#selectFone :selected").val();
    let texto = $("#floatingTextarea2").val();
    let created_at = moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss");

    var settings = {
      url: `${ip_servidor}/retornarSessao?fone=${canal}`,
      method: "POST",
      timeout: 0,
      async: false,
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      sessao = response;
    });

    var settings = {
      url: `${ip_servidor}/enviar?session=${sessao[0].nome}&from_number=${canal}&to_number=${fone}&content=${texto}&type="chat"&created_at=${created_at}`,
      method: "POST",
      timeout: 0,
      async: false,
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    //fechar o modal depois do envio da mensagem

    //lembrar de mudar o canal de envio de mensagens
  });
}
