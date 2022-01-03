import { desconectarCanal } from "./requisicoesAjax/desconectarCanal.js";

export function desconectar(ip_servidor) {
  document.querySelectorAll(".desconectar").forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      desconectarCanal(ip_servidor, item);

      document.location.reload(true);
    });
  });
}
