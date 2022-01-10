import { automaticasRender } from "./automaticas.js";
import { filaDeEnvio } from "./filaDeEnvio.js";
import { inicioRender } from "./inicio.js";
import { inserirMensagens } from "./inserirMensagens.js";
import { modelosRender } from "./modelos.js";

export function hoverMenu(ip_servidor) {
  let section = document.querySelector("#renderizarSection");

  document.querySelectorAll(".deslocar").forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      element.classList.add("animacao");
    });
    element.addEventListener("mouseout", (event) => {
      element.classList.remove("animacao");
    });

    element.addEventListener("click", (event) => {
      event.preventDefault();
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      element.classList.add("active");

      switch (element.id) {
        case "inicioMensagens":
          $(section).empty();
          $(section).append(inicioRender);
          break;
        case "automaticas":
          $(section).empty();
          $(section).append(automaticasRender);
          break;
        case "filaDeEnvio":
          $(section).empty();
          $(section).append(filaDeEnvio);
          break;
        case "modelos":
          $(section).empty();
          $(section).append(modelosRender(ip_servidor));
          inserirMensagens(ip_servidor);

          break;

        default:
          break;
      }
    });
  });
}
