import { renderMessage } from "./renderMensagens.js";

export function enviarMensagem(numberDestino, ipSocket, ip_servidor) {
  $("#chat").submit(function (event) {
    event.preventDefault();

    let resposta = null;

    console.log(numberDestino.retornarNumero());

    var author = numberDestino.retornarNumero().conectado;
    var message = $("input[name=texto]").val();
    var to_number = numberDestino.retornarNumero().cliente;

    var type = "chat";
    var created_at = moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss");
    var conectado = numberDestino.retornarNumero().conectado;

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

    var session = resposta.nome;

    if (message.length) {
      var messageObject = {
        author: conectado,
        message: message,
        session: resposta.nome,
      };

      renderMessage(messageObject, "browser", conectado);
      ipSocket.emit("sendMessage", messageObject);
    }

    var settings = {
      url: `${ip_servidor}/enviar?session=${session}&from_number=${author}&to_number=${to_number}&content=${message}&type=${type}&created_at=${created_at}`,
      method: "POST",
      timeout: 0,
      async: false,
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    document.getElementById("buscar").value = "";

    let notificacoes = document.querySelector(".notificacoes");

    if (notificacoes.classList.contains("text-danger")) {
    } else {
      let audio = new Audio("assets/audios/envio.mp3");

      audio.play();
    }
  });
}
