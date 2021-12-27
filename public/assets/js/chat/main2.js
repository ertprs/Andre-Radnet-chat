import Socket from "./conectarSocketIo.js";
import Conversas from "./conversas.js";
import RetornarNumero from "./retornarNumero.js";

let socket = new Socket();
let retornar = new RetornarNumero();
let conversas = new Conversas();

socket.conectarSocketIo(ip_servidor, conversas, retornar);
