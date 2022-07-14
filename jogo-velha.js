const X = "X";
const O = "O";

let jogador=X;
let jogadas=1;
let jogo=true;
let posicao=[ ["","",""],
              ["","",""], 
              ["","",""]   
            ]

function checaJogador(){
    if (jogo){
        if (jogadas%2!=0){
            jogador=X;
        } else {
            jogador=O;
        }
    }
}

function reiniciarJogo() {
    window.location.reload();
}

function selecionarArea(posicaoLinha, posicaoColuna) {
    if (posicao[posicaoLinha-1], [posicaoColuna-1]){
        desenharSimbolo(jogador, posicaoLinha, posicaoColuna);
    }
    jogadas++
    checaJogador();
    
}


