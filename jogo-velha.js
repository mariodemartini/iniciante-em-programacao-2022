const X = "X";
const O = "O";

let jogador=X;
let jogadas=1;
let jogo=true;
let posicao=[]

posicaoMatriz(posicao,'');

function posicaoMatriz(posicao,valor){
    for (let linha = 0; linha < 3; linha++) {
        posicao[linha] = [];
        for (let coluna = 0; coluna < 3; coluna++) {
            posicao[linha][coluna] = valor;
        }
    }
}

function checaJogador(){
    if (jogo){
        if (jogadas%2!=0){
            jogador=X;
        } else {
            jogador=O;
        }
    }
}

function validaJogadas(posicaoLinha,posicaoColuna){
    if (posicao[posicaoLinha-1], [posicaoColuna-1]){
        desenharSimbolo(jogador, posicaoLinha, posicaoColuna);
    }
    jogadas++
    checaJogador();
    marcarJogadorAtivo(jogador);
}

function reiniciarJogo() {
    window.location.reload();
}

function selecionarArea(posicaoLinha, posicaoColuna) {
    validaJogadas(posicaoLinha,posicaoColuna);
    verificaVencedor();
}

function verificaVencedor(){
    horizontal();
    vertical();
    diagonal();
    empate();
}

function horizontal() {
    if (posicao[0][0]==jogador && posicao[0][1]==jogador && posicao[0][2]==jogador ||
        posicao[1][0]==jogador && posicao[1][1]==jogador && posicao[1][2]==jogador ||
        posicao[2][0]==jogador && posicao[2][1]==jogador && posicao[2][2]==jogador) {
            exibirResultado(jogador)
        }
    
}

function vertical() {
    if (posicao[0][0]==jogador && posicao[1][0]==jogador && posicao[2][0]==jogador ||
        posicao[0][1]==jogador && posicao[1][1]==jogador && posicao[2][1]==jogador ||
        posicao[0][2]==jogador && posicao[1][2]==jogador && posicao[2][2]==jogador) {
            exibirResultado(jogador)
        }
}

function diagonal() {
    if (posicao[0][0]==jogador && posicao[1][1]==jogador && posicao[2][2]==jogador ||
        posicao[0][2]==jogador && posicao[1][1]==jogador && posicao[2][0]==jogador) {
            exibirResultado(jogador)
        }
}

function empate(){
    let jogoCompleto=0;
    for (let linha=0;linha<3;linha++){
        if (posicao[linha][coluna] != ''){
            jogoCompleto++;
        }
        if (jogoCompleto==9){
            jogo=false;
        }
    }
}