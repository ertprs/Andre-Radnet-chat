import { atualizarClienteAjax } from "./requisicoesAjax/atualizarClienteAjax.js";
import { atualizarEnderecoAjax } from "./requisicoesAjax/atualizarEnderecoAjax.js";
import { criarClienteAjax } from "./requisicoesAjax/criarClienteAjax.js";
import { criarClienteEnderecoAjax } from "./requisicoesAjax/criarClienteEnderecoAjax.js";
import { criarEnderecoAjax } from "./requisicoesAjax/criarEnderecoAjax.js";
import { pesquisarEnderecoClienteAjax } from "./requisicoesAjax/pesquisarEnderecoClienteAjax.js";

export function atualizarInformacoesCliente(ip_servidor, retornar) {
  let modalInfoCliente = document.querySelector("#salvarInfoCliente");

  modalInfoCliente.addEventListener("click", () => {
    let gravarCliente = {
      nome: $("[name='nomeCliente']").val(),
      segundoContato: $("[name='segundoContatoCliente']").val(),
      email: $("[name='emailCliente']").val(),
      empresa: $("[name='empresaCliente']").val(),
      anotacoes: $("[name='anotacoesCliente']").val(),
    };

    let cliente = {
      nome: $("[name='nomeCliente']").val(),
      contato: $("[name='contatoCliente']").val(),
      segundoContato: $("[name='segundoContatoCliente']").val(),
      email: $("[name='emailCliente']").val(),
      empresa: $("[name='empresaCliente']").val(),
      anotacoes: $("[name='anotacoesCliente']").val(),
    };

    let gravarEndereco = {
      cep: $("[name='cepCliente']").val(),
      logradouro: $("[name='logradouroCliente']").val(),
      numero: $("[name='numeroCliente']").val(),
      bairro: $("[name='bairroCliente']").val(),
      complemento: $("[name='complementoCliente']").val(),
      cidade: $("[name='cidadeCliente']").val(),
      estado: $("[name='estadoCliente']").val(),
      pais: $("[name='paisCliente']").val(),
    };

    let infoCliente = pesquisarEnderecoClienteAjax(
      ip_servidor,
      cliente.contato
    );

    if (!infoCliente.length) {
      let idEndereco = criarEnderecoAjax(ip_servidor, gravarEndereco);
      console.log(idEndereco);

      cliente.id_endereco = idEndereco.insertId;

      let idCliente = criarClienteAjax(ip_servidor, cliente);

      criarClienteEnderecoAjax(
        ip_servidor,
        idCliente.insertId,
        idEndereco.insertId,
        cliente.contato
      );

      $("#exampleModal5").modal("hide");
    } else {
      gravarCliente.id_endereco = infoCliente[0].id_endereco;

      atualizarClienteAjax(
        ip_servidor,
        infoCliente[0].id_cliente,
        gravarCliente
      );

      atualizarEnderecoAjax(
        ip_servidor,
        infoCliente[0].id_endereco,
        gravarEndereco
      );

      $("#exampleModal5").modal("hide");
    }
  });
}
