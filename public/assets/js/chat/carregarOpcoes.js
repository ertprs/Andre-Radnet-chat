import { buscarCanaisAtivos } from "./requisicoesAjax/buscarCanaisAtivos.js";
import { buscarCanais } from "./requisicoesAjax/buscarCanais.js";

export function carregarOpcoes() {
  let canais = null;
  let removerCanais = null;

  canais = buscarCanaisAtivos(ip_servidor);
  removerCanais = buscarCanais(ip_servidor);

  let selectCanais = document.querySelector(".selectCanal");

  canais.forEach((element) => {
    let canaisInserir = `   
      <option value="${element.fone}">${element.nome} - ${element.fone}</option>
       `;

    $(selectCanais).append(canaisInserir);
  });
}
