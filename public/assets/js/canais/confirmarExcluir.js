export function confirmarExcluir() {
  document.querySelectorAll("#confirm_excluir").forEach((item) => {
    item.addEventListener("click", function () {
      document.location.reload(true);
    });
  });
}
