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
}

function reiniciarJogo() {
    window.location.reload();
}

function selecionarArea(posicaoLinha, posicaoColuna) {
    validaJogadas(posicaoLinha,posicaoColuna);
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
    //for (let coluna = 0; coluna < 3; coluna++) {
      //  if (posicao[0][coluna] == posicao[linha][1] && tabelaJogadas[linha][1] == posicao[linha][2] && posicao[linha][1] != '') {
        //    exibirResultado("O vencedor é " + jogador);
          //  jogo = false;
        //}
    //}
}
