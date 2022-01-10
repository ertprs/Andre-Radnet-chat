import { hoverMenu } from "./hoverMenu.js";
import { inicioRender } from "./inicio.js";

let section = document.querySelector("#renderizarSection");
$(section).empty();
$(section).append(inicioRender);

hoverMenu(ip_servidor);
