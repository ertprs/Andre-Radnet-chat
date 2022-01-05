import { criarTransferenciaAtendimentoAjax } from "./requisicoesAjax/criarTransferenciaAtendimentoAjax.js";

export function transferirAtendimento(ip_servidor, retornar) {
  let btnTransferir = document.querySelector("#btnTransferir");
  let aviso = document.querySelector(".avisoPreencher");
  let avisoColocar = `
  <p class="text-center bg-danger text-light p-1" id="avisoPreencher">
  <strong>Preencha com a Pesssoa/Departamento para transferência</strong>
  </p>
  `;

  btnTransferir.addEventListener("click", () => {
    let select = $("#inputGroupSelect01 :selected").val();
    let mensagem = $("#mensagemTransferencia").val();

    if (select == "") {
      if (aviso.children.length === 0) {
        $(aviso).append(avisoColocar);
      } else {
        console.log("contem aviso");
      }
    } else {
      console.log(retornar.atendimento.cliente);

      let atendimento = {
        cliente: retornar.atendimento.cliente,
        requerente: retornar.atendimento.conectado,
        destino: select,
        mensagem: mensagem,
        status: "aberta",
      };

      criarTransferenciaAtendimentoAjax(ip_servidor, atendimento);

      $("#exampleModal3").modal("hide");
      toastr.success("Transferencia feita com sucesso");

      //dar continuidade a função de transferencia de atendimento
    }
  });

  document.querySelectorAll(".btnCancelar").forEach((item) => {
    item.addEventListener("click", () => {
      $(aviso).empty();
      $("#inputGroupSelect01").prop("selectedIndex", 0);
    });
  });
}
