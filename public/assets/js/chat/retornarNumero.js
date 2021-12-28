export default class RetornarNumero {
  atendimento = null;

  pegarNumero(param_cliente, param_conectado) {
    this.atendimento = {
      cliente: param_cliente,
      conectado: param_conectado,
    };
  }
  retornarNumero() {
    console.log(this.atendimento);

    if (
      typeof this.atendimento !== "undefined" ||
      typeof this.atendimento !== null
    ) {
      return this.atendimento;
    } else {
      return "undefined";
    }
  }
}
