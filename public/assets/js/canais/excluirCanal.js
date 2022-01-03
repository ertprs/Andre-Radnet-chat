import { excluirCanalAjax } from "./requisicoesAjax/excluirCanalAjax.js";

export function excluirCanal(ip_servidor) {
  let idCanal = null;

  document.querySelectorAll(".excluir").forEach((item) => {
    item.addEventListener("click", function () {
      idCanal = item.id;

      excluirCanalAjax(ip_servidor, idCanal);
    });
  });
}
