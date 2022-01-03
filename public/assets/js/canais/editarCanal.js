export function editarCanal(pegarRetornarCanal) {
  document.querySelectorAll(".editar").forEach((item) => {
    item.addEventListener("click", function () {
      const canalArray = item.id.split("-");

      let editarCanal = {
        nome: canalArray[0],
        fone_anterior: canalArray[1],
      };

      pegarRetornarCanal.guardarCanal(editarCanal);
    });
  });
}
