export default class guardarCanal {
  canal = null;

  guardarCanal(param_canal) {
    this.canal = {
      nome: param_canal.nome,
      fone_anterior: param_canal.fone_anterior,
    };
  }
  retornarNumero() {
    console.log(this.canal);
    return this.canal;
  }
}
