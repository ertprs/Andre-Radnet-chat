import { editarCanalAjax } from "./requisicoesAjax/editarCanalAjax.js";

export function confirmarAtualizar(ip_servidor, pegarRetornarCanal) {
  document.querySelectorAll("#confirm_atualizar").forEach((item) => {
    item.addEventListener("click", function () {
      var nomeEditar = document.querySelector("#editar-nome");
      let nomeInput = nomeEditar.value;
      var foneEditar = document.querySelector("#editar-numero");
      let foneInput = foneEditar.value;

      let editarCanal = pegarRetornarCanal.retornarNumero();

      editarCanalAjax(ip_servidor, nomeInput, foneInput, editarCanal);

      document.location.reload(true);
    });
  });
}
