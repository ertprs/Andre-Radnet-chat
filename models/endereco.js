const conexao = require("../infraestrutura/conexao");

class Endereco {
  criarEndereco(endereco) {
    return new Promise((resolve, reject) => {
      try {
        const sql = `INSERT INTO endereco SET ?`;

        conexao.query(sql, endereco, (erro, resultados) => {
          if (erro) {
            console.log(erro);
          }

          resolve("cliente cadastrado com sucesso");
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  pesquisarEndereco() {}
}

module.exports = new Endereco();
