import { buscarTodosAtendentes } from "./requisicoesAjax/buscarAtendentesCadastrados.js";
import { buscarDepartamentos } from "./requisicoesAjax/buscarDepartamentos.js";

export function transferirAtendimentoButoes(ip_servidor) {
  let btnPessoa = document.querySelector("#botaoPessoa");
  let btnDepartamento = document.querySelector("#botaoDepartamento");

  let modalPessoa = document.querySelector(".modalPessoa");
  let modalDepartamento = document.querySelector(".modalDepartamento");

  let departamentos = buscarDepartamentos(ip_servidor);
  let atendentes = buscarTodosAtendentes(ip_servidor);

  let templatePessoa = `
    <div class="templatePessoa">
    <p>Selecione a(s) pessoa(s) que deseja destinar o atendimento. A primeira que
    atribuir o atendimento a si, dará continuiedade.</p>
          <div class="">
          <span>Aperte Ctrl ou Command para selecionar mais de uma pessoa</span>
          <div class="input-group mb-3">
              <select class="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
              </select>
          </div>
      </div>
    </div>
  `;

  let templateDepartamento = `
  
 <div class="templateDepartamento">
 <p>Selecione um departamento para transferir o atendimento e notificar todos os atendentes vinculados a este. Assim, o primeiro que o atribuir a si, será o responsável.</p>
    <div class="">
        <span>Selecione um departamento</span>
        <div class="input-group mb-3">
 <select class="form-select" id="inputGroupSelect01">
 <option selected>Choose...</option>
 </select>
 </div>
 </div>
 </div>
  
  `;

  $(document).ready(function () {
    $(modalPessoa).append(templatePessoa);
    let selectAtendentes = document.querySelector("#inputGroupSelect01");

    for (let index = 0; index < atendentes.length; index++) {
      $(selectAtendentes).append(
        `<option value="${atendentes[index].nome}">${atendentes[index].nome}  - ${atendentes[index].nivel_acesso}</option>`
      );
    }
    ("");
  });

  btnPessoa.addEventListener("click", () => {
    if (!btnPessoa.classList.contains("btn-primary")) {
      btnPessoa.classList.remove("btn-light");
      btnPessoa.classList.add("btn-primary");

      btnDepartamento.classList.remove("btn-primary");
      btnDepartamento.classList.add("btn-light");

      $(modalPessoa).append(templatePessoa);
      $(".templateDepartamento").remove();

      let selectAtendentes = document.querySelector("#inputGroupSelect01");

      for (let index = 0; index < atendentes.length; index++) {
        $(selectAtendentes).append(
          `<option value="${atendentes[index].nome}">${atendentes[index].nome}  - ${atendentes[index].nivel_acesso}</option>`
        );
      }
    }
  });

  btnDepartamento.addEventListener("click", () => {
    if (!btnDepartamento.classList.contains("btn-primary")) {
      btnDepartamento.classList.remove("btn-light");
      btnDepartamento.classList.add("btn-primary");

      btnPessoa.classList.remove("btn-primary");
      btnPessoa.classList.add("btn-light");

      $(modalDepartamento).append(templateDepartamento);
      $(".templatePessoa").remove();

      let selectDepartamentos = document.querySelector("#inputGroupSelect01");

      for (let index = 0; index < departamentos.length; index++) {
        $(selectDepartamentos).append(
          `<option value="${departamentos[index].departamento}">${departamentos[index].departamento} </option>`
        );
      }
    }
  });
}
