export function carregarOpcoes() {
  let carregarOpcoes = document.querySelector(".carregarOpcoes");

  carregarOpcoes.addEventListener("click", () => {
    let canais = null;
    let numeros = null;

    var settings = {
      url: `${ip_servidor}/buscarCanaisAtivos`,
      method: "POST",
      timeout: 0,
      async: false,
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      canais = response;
    });

    var settings = {
      url: `${ip_servidor}/buscarFoneClientes`,
      method: "POST",
      timeout: 0,
      async: false,
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      numeros = response;
    });

    let selectCanais = document.querySelector(".selectCanal");

    canais.forEach((element) => {
      let canaisInserir = `   
      <option value="${element.fone}">${element.nome} - ${element.fone}</option>
       `;

      $(selectCanais).append(canaisInserir);
    });

    let selectFones = document.querySelector(".selectFone");

    numeros.forEach((element) => {
      let fonesInserir = `   
      <option value="${element.from_number}">${element.from_number}</option>
       `;

      $(selectFones).append(fonesInserir);
    });
  });
}
