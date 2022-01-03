import { cadastrarCanalAjax } from "./requisicoesAjax/cadastrarCanalAjax.js";

export function cadastrarCanal(ip_servidor) {
  $("#form-canais").submit(function (event) {
    event.preventDefault();

    var nome = $("input[name=nome]").val();
    var numero = $("input[name=numero]").val();
    var status = "desconectado";

    cadastrarCanalAjax(ip_servidor, nome, numero, status);

    document.location.reload(true);
  });
}
