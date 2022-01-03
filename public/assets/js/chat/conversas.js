import RetornarNumero from "./retornarNumero.js";
import { carregarConversas } from "./requisicoesAjax/carregarConversas.js";
import { recuperarMensagens } from "./requisicoesAjax/recuperarMensagens.js";
import { removerNotificacao } from "./requisicoesAjax/removerNotificacao.js";
import { buscarProtocolo } from "./requisicoesAjax/buscarProtocolo.js";

export default class Conversas {
  conversas = null;

  procurarUltimasConversas(ip_servidor) {
    let resposta;
    resposta = carregarConversas(ip_servidor);
    this.conversas = resposta;
  }

  renderUltimasConversas(conversas) {
    let ultimaConversa = [];
    let numerosUnicos = [];

    conversas.forEach((element) => {
      if (
        numerosUnicos.includes(element.from_number + element.to_number) ||
        numerosUnicos.includes(element.to_number + element.from_number)
      ) {
        for (let index = 0; index < ultimaConversa.length; index++) {
          if (
            ultimaConversa[index].id < element.id &&
            ultimaConversa[index].from_number == element.from_number
          ) {
            ultimaConversa[index].content = element.content;
          }
        }
      } else {
        numerosUnicos.push(element.from_number + element.to_number);
        ultimaConversa.push({
          id: element.id,
          from_number: element.from_number,
          to_number: element.to_number,
          content: element.content,
          created_at: moment(element.created_at).format("DD-MM-YYYY HH:mm"),
        });
      }
    });

    ultimaConversa.forEach((element) => {
      let templateConversa = `
     
      <div class='d-flex pop-chat mb-1 clientesConversa' id="${element.from_number}-${element.to_number}">
          <div class='d-flex justify-content-center align-items-center flex-grow-1'>
              <img src='assets/img/transferir.png' class='img-chat m-2'>
          </div>
       
          <div class='w-100 m-2'>
              <div class='d-flex justify-content-between data-hora'>
                  <p class="text-light">De: ${element.from_number} <br> Para: ${element.to_number} </p>
                  <p class="text-light pe-2"> ${element.created_at} </p>
              </div>
    
              <div class='mensagem'>
                  <p class="text-light" style=" max-width: 30ch; overflow: hidden; text-overflow: ellipsis;white-space: nowrap;"> ${element.content} </p>
              </div>

    
          </div>
          
       
      </div>

      `;

      $(".conversas-chat").append(templateConversa);
    });
  }

  adicionarEventoConversa(ip_servidor, retornar) {
    document.querySelectorAll(".clientesConversa").forEach((item) => {
      item.addEventListener("click", function () {
        const toFromId = item.id.split("-");

        let origemDestino = {
          from_number: toFromId[0],
          to_number: toFromId[1],
        };

        retornar.pegarNumero(
          origemDestino.from_number,
          origemDestino.to_number
        );

        recuperarMensagens(ip_servidor, origemDestino);

        let telaChat = document.querySelector("#tela-chat");
        telaChat.style.visibility = "visible";

        //remover notificacao
        removerNotificacao(ip_servidor, origemDestino);

        $("#buscar").prop("disabled", false);

        if (item.children[2]) {
          item.children[2].style.visibility = "hidden";
          let valorDiv = item.children[2].children[0].children[0].textContent;
          let resultado = parseInt(valorDiv) + 1;
          item.children[2].children[0].children[0].innerHTML = "";
        }

        let protocoloAtendimento;

        //buscarProtocolo
        protocoloAtendimento = buscarProtocolo(ip_servidor, origemDestino);

        let clienteStrong = document.querySelector("#clienteStrong");
        clienteStrong.innerHTML = origemDestino.from_number;

        let clienteSmall = document.querySelector("#clienteSmall");
        clienteSmall.innerHTML = origemDestino.from_number;

        let canalStrong = document.querySelector("#canalStrong");
        canalStrong.innerHTML = `Canal: ${origemDestino.to_number}`;

        let protocoloSmall = document.querySelector("#protocoloSmall");
        protocoloSmall.innerHTML = `Protocolo: ${protocoloAtendimento[0].protocolo}`;
      });
    });
  }

  retornarUltimasConversas() {
    return this.conversas;
  }
}
