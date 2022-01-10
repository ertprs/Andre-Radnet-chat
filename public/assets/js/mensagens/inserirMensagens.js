import { pegarTodasMensagensSistemaAjax } from "./requisicoesAjax/pegarTodasMensagensSistemaAjax.js";

export function inserirMensagens(ip_servidor) {
  let mensagens = pegarTodasMensagensSistemaAjax(ip_servidor);

  let mensagensTabela = document.querySelector(".mensagensTabela");

  mensagens.forEach((element) => {
    let teste = `
      <tr>
        
          <td class="col-10">${element.mensagem}</td>
          <td class="col-2 text-center">
              <span class="bg-success p-1 rounded">${element.tipo}</span>
          </td>
      </tr>
      `;

    $(mensagensTabela).append(teste);
  });
}
