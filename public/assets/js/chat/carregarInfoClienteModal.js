import { pesquisarEnderecoClienteAjax } from "./requisicoesAjax/pesquisarEnderecoClienteAjax.js";
import { pesquisarEnderecoAjax } from "./requisicoesAjax/pesquisarEnderecoAjax.js";
import { pesquisarClienteAjax } from "./requisicoesAjax/pesquisarClienteAjax.js";

export function carregarInfoClienteModal(ip_servidor, retornar) {
  let perfilCliente = document.querySelector("#perfilCliente");

  perfilCliente.addEventListener("click", () => {
    let infoCliente = pesquisarEnderecoClienteAjax(
      ip_servidor,
      retornar.atendimento.cliente
    );

    if (!infoCliente.length) {
      let nomeCliente = (document.querySelector("[name='nomeCliente']").value =
        retornar.atendimento.cliente);

      let contatoCliente = (document.querySelector(
        "[name='contatoCliente']"
      ).value = retornar.atendimento.cliente);
    } else {
      console.log(infoCliente[0]);

      let endereco = pesquisarEnderecoAjax(
        ip_servidor,
        infoCliente[0].id_endereco
      );

      document.querySelector("[name='cepCliente']").value = endereco[0].cep;
      document.querySelector("[name='bairroCliente']").value =
        endereco[0].bairro;
      document.querySelector("[name='cidadeCliente']").value =
        endereco[0].cidade;
      document.querySelector("[name='complementoCliente']").value =
        endereco[0].complemento;
      document.querySelector("[name='estadoCliente']").value =
        endereco[0].estado;
      document.querySelector("[name='logradouroCliente']").value =
        endereco[0].logradouro;
      document.querySelector("[name='numeroCliente']").value =
        endereco[0].numero;
      document.querySelector("[name='paisCliente']").value = endereco[0].pais;
      console.log(endereco);

      let cliente = pesquisarClienteAjax(
        ip_servidor,
        infoCliente[0].id_cliente
      );

      console.log(cliente);

      document.querySelector("[name='nomeCliente']").value = cliente[0].nome;
      document.querySelector("[name='contatoCliente']").value =
        cliente[0].contato;
      document.querySelector("[name='segundoContatoCliente']").value =
        cliente[0].segundoContato;
      document.querySelector("[name='emailCliente']").value = cliente[0].email;
      document.querySelector("[name='empresaCliente']").value =
        cliente[0].empresa;
      document.querySelector("[name='anotacoesCliente']").value =
        cliente[0].anotacoes;

      console.log(cliente);
    }
  });
}
