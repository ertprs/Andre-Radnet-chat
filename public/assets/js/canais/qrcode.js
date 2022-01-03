import { conectar } from "./requisicoesAjax/conectar.js";

export function qrcode(ip_servidor) {
  let divqr = document.querySelector(".qrcodediv");

  divqr.style.visibility = "hidden";

  let qrcode;
  let editarCanal = null;

  document.querySelectorAll(".conectar").forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      const canalArray = item.id.split("-");

      editarCanal = {
        nome: canalArray[0],
        fone_anterior: canalArray[1],
      };
      console.log(canalArray);

      //conectar
      qrcode = conectar(ip_servidor, editarCanal);

      if (qrcode == "conectado") {
        document.location.reload(true);
      } else {
        let imgQrcode = `
                            <img width="100%" src="${qrcode}">
                        `;
        divqr.style.visibility = "visible";

        $(".qrcode").append(imgQrcode);

        let devices = document.querySelector("#devices");

        devices.style.visibility = "hidden";
      }
    });
  });
}
