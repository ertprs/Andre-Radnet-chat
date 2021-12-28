export function preventF5(ip_servidor, number_fone) {
  $(document).ready(function () {
    $(window).keydown(function (event) {
      if (event.keyCode == 116) {
        event.preventDefault();

        console.log("deu f5");

        let windowLoad =
          '<div class="" style="width:100%; height:100%; filter: blur(50px);opacity; 0.9px;filter: contrast(10); position:absolute; top:0;left:0; background:rgba(255,255,255,0.8);" id="fundo-branco">.</div>';

        let spinner =
          '<img src="assets/img/ajax-loader.gif" style="position: absolute; top:50%; left:50%;margin-top:-9.5px;margin-left:-110px" id="spinner">';

        $("#corpo").append(windowLoad);
        $("#corpo").append(spinner);

        setTimeout(function () {
          removerCarregamento();
        }, 1000);

        async function removerCarregamento() {
          document.getElementById("fundo-branco").remove();
          document.getElementById("spinner").remove();
          document.location.reload(true);
        }
      }
    });
  });
}
