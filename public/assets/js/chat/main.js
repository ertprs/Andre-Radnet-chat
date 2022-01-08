import Conversas from "./conversas.js";
import Socket from "./conectarSocketIo.js";
import { preventF5 } from "./preventF5.js";
import RetornarNumero from "./retornarNumero.js";
import { esconderChat } from "./esconderChat.js";
import { recarregarDiv } from "./recarregar-div.js";
import { enviarMensagem } from "./enviarMensagem.js";
import { carregarOpcoes } from "./carregarOpcoes.js";
import { mensagensInternas } from "./mensagensInternas.js";
import { esconderNotificacao } from "./esconderNotificacao.js";
import { colocarNotificacoes } from "./colocarNotificacoes.js";
import { transferirAtendimento } from "./transferirAtendimento.js";
import { iniciarNovoAtendimento } from "./iniciarNovoAtendimento.js";
import { carregarInfoClienteModal } from "./carregarInfoClienteModal.js";
import { atualizarInformacoesCliente } from "./atualizarInformacoesCliente.js";
import { transferirAtendimentoBotoes } from "./transferirAtendimentoBotoes.js";

let socket = new Socket();
let retornar = new RetornarNumero();
let conversas = new Conversas();

//conecta ao websocket
socket.conectarSocketIo(ip_servidor, conversas, retornar);

esconderChat();

// refatorar codigo front-end
conversas.procurarUltimasConversas(ip_servidor);
let chatConversas = conversas.retornarUltimasConversas();
conversas.renderUltimasConversas(chatConversas);
conversas.adicionarEventoConversa(ip_servidor, retornar);

//retorna a conexão do websocket para usar em outras funções
let ipSocket = socket.retornarSocket();

enviarMensagem(retornar, ipSocket, ip_servidor);
recarregarDiv();
mensagensInternas();
esconderNotificacao();

preventF5(ip_servidor, retornar.retornarNumero());

//atualizar essa função
colocarNotificacoes();
iniciarNovoAtendimento();
carregarOpcoes();
transferirAtendimentoBotoes(ip_servidor);
transferirAtendimento(ip_servidor, retornar);
carregarInfoClienteModal(ip_servidor, retornar);
atualizarInformacoesCliente(ip_servidor, retornar);
