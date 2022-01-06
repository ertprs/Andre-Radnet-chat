const conexao = require("../infraestrutura/conexao");

class Clientes {
  atualizarInfoCliente(cliente) {
    return new Promise((resolve, reject) => {
      try {
        const sql = `INSERT INTO clientes SET ?`;

        conexao.query(sql, cliente, (erro, resultados) => {
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
}

module.exports = new Clientes();
