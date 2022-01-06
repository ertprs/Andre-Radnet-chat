import { pesquisarEnderecoClienteAjax } from "./requisicoesAjax/pesquisarEnderecoClienteAjax";

export function carregarInfoClienteModal(retornar) {
  let perfilCliente = document.querySelector("#perfilCliente");

  perfilCliente.addEventListener("click", () => {
    let nomeCliente = (document.querySelector("[name='nomeCliente']").value =
      retornar.atendimento.cliente);
    let contatoCliente = (document.querySelector(
      "[name='contatoCliente']"
    ).value = retornar.atendimento.cliente);
  });
}
