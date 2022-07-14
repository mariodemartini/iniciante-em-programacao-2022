const X = "X";
const O = "O";

let jogador=X;
let jogadas=1;
let posicao=[ ["","",""],
              ["","",""], 
              ["","",""]   
            ]

function checaJogadas(){
    if (jogadas%2<0){
        jogador=X;
    } else {
        jogador=O;
    }
}



function reiniciarJogo() {
    
}

function selecionarArea(posicaoLinha, posicaoColuna) {


}