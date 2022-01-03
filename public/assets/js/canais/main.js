import { cadastrarCanal } from "./cadastrarcanal.js";
import { excluirCanal } from "./excluirCanal.js";
import { confirmarExcluir } from "./confirmarExcluir.js";
import { confirmarAtualizar } from "./confirmarAtualizar.js";
import { desconectar } from "./desconectar.js";
import { qrcode } from "./qrcode.js";
import { editarCanal } from "./editarCanal.js";
import guardarCanal from "./guardarCanal.js";

let pegarRetornarCanal = new guardarCanal();

cadastrarCanal(ip_servidor);
excluirCanal(ip_servidor);
editarCanal(pegarRetornarCanal);
confirmarExcluir(ip_servidor);
confirmarAtualizar(ip_servidor, pegarRetornarCanal);
desconectar(ip_servidor);
qrcode(ip_servidor);
