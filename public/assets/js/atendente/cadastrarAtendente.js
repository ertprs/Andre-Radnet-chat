export function cadastrarAtendente() {
  $("#form-atendente").submit(function (event) {
    event.preventDefault();

    let nome = $("input[name=primeiro-nome]").val();
    let sobrenome = $("input[name=segundo-nome]").val();
    let email = $("input[name=email]").val();
    let senha = $("input[name=senha]").val();
    let setor = $("#setor :selected").val();

    console.log(setor);

    var settings = {
      url: `http://localhost:3000/atendentes-cadastrar?nome=${nome}&sobrenome=${sobrenome}&email=${email}&senha=${senha}&nivel_acesso=${setor}`,
      method: "POST",
      timeout: 0,
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    document.location.reload(true);
  });
}
