export function carregarOpcoes() {
  let carregarOpcoes = document.querySelector(".carregarOpcoes");

  let canais = null;
  let numeros = null;
  let removerCanais = null;

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

  var settings = {
    url: `${ip_servidor}/buscarCanais`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    removerCanais = response;
  });

  let numerosFiltrados = [];

  removerCanais.forEach((element) => {
    numerosFiltrados.push(element.fone);
  });

  let numerosSemCanal = numeros.filter(
    (item) => !numerosFiltrados.includes(item.from_number)
  );

  let selectCanais = document.querySelector(".selectCanal");

  canais.forEach((element) => {
    let canaisInserir = `   
      <option value="${element.fone}">${element.nome} - ${element.fone}</option>
       `;

    $(selectCanais).append(canaisInserir);
  });

  let selectFones = document.querySelector(".selectFone");

  numerosSemCanal.forEach((element) => {
    let fonesInserir = `   
      <option value="${element.from_number}">${element.from_number}</option>
       `;

    $(selectFones).append(fonesInserir);
  });
}
