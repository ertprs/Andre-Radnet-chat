export function transferirAtendimento() {
  let btnTransferir = document.querySelector("#btnTransferir");

  btnTransferir.addEventListener("click", () => {
    let select = $("#inputGroupSelect01 :selected").val();
    let mensagem = $("#mensagemTransferencia").val();
  });
}
