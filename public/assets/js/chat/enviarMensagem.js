import { renderMessage } from "./renderMensagens.js";

export function enviarMensagem(numberDestino, ipSocket, ip_servidor) {
  $("#chat").submit(function (event) {
    event.preventDefault();

    console.log(numberDestino.retornarNumero());

    var author = numberDestino.retornarNumero().conectado;
    var message = $("input[name=texto]").val();
    var to_number = numberDestino.retornarNumero().cliente;
    var session = "Marketing";
    var type = "chat";
    var created_at = moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss");

    var settings = {
      url: `http://${ip_servidor}/retornarSessao?fone=${
        numberDestino.retornarNumero().conectado
      }`,
      method: "POST",
      timeout: 0,
      async: false,
    };

    let resposta = null;

    $.ajax(settings).done(function (response) {
      console.log(response);
      resposta = response;
    });

    if (message.length) {
      var messageObject = {
        author: conectado,
        message: message,
        session: resposta.nome,
      };

      renderMessage(messageObject);
      ipSocket.emit("sendMessage", messageObject);
    }

    var settings = {
      url: `http://${ip_servidor}/enviar?session=${session}&from_number=${author}&to_number=${to_number}&content=${message}&type=${type}&created_at=${created_at}`,
      method: "POST",
      timeout: 0,
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    document.getElementById("buscar").value = "";

    let audio = new Audio("assets/audios/envio.mp3");

    audio.play();
  });
}
