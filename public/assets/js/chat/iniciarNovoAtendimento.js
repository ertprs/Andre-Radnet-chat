import { retornarSessao } from "./requisicoesAjax/retornarSessao.js";
import { enviarMensagemAjax } from "./requisicoesAjax/enviarMensagemAjax.js";

export function iniciarNovoAtendimento() {
  let novoAtendimento = document.querySelector(".novoAtendimento");
  let sessao = null;

  novoAtendimento.addEventListener("click", () => {
    let canal = $("#selectCanal :selected").val();
    let fone = $("#inputFone").val();
    let texto = $("#floatingTextarea2").val();
    let created_at = moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss");

    if (
      canal == "Selecione uma opção" ||
      fone == "Selecione uma opção" ||
      texto == ""
    ) {
      toastr.error(`Complete com todas as informações do formulário`);
    } else {
      sessao = retornarSessao(ip_servidor, canal);

      try {
        enviarMensagemAjax(
          ip_servidor,
          sessao[0].nome,
          canal,
          fone,
          texto,
          created_at
        );
      } catch (error) {
        console.log("erro no envio");
      }

      $("#exampleModal").modal("hide");

      document.location.reload(true);
    }

    //lembrar de mudar o canal de envio de mensagens
  });
}
