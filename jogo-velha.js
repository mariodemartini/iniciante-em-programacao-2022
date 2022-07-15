const X = "X";
const O = "O";

let jogador= X;
let quantidadeJogadas = 0;
let posicaoX = [];
let posicaoO = [];

function posicaoArea(posicaoLinha, posicaoColuna,jogador){
    if(jogador == X){
        posicaoX.push([posicaoLinha,posicaoColuna]);
    }

    if(jogador == O){
        posicaoO.push([posicaoLinha,posicaoColuna]);
    }
 }

function checaJogador(){
    if (jogador == X){
        jogador = O;
        return marcarJogadorAtivo(jogador); 
    }
    jogador = X;
    return marcarJogadorAtivo(jogador);
}


function reiniciarJogo() {
    window.location.reload();
}

function verificaEmapate(){
    quantidadeJogadas+=1;
    console.log(quantidadeJogadas);
    if(quantidadeJogadas == 9){
        return exibirResultado("O JOGO EMPATOU");
    }
}

function verificaVencedor(posicaoX, posicaoO){
    horizontal(posicaoX);
    horizontal(posicaoO);
    vertical(posicaoX);
    vertical(posicaoO);
    diagonal(posicaoX);
    diagonal(posicaoO);
}


function horizontal(posicao) {
    let quantidadeLinha1 = 0;
    let quantidadeLinha2 = 0;
    let quantidadeLinha3 = 0;


    tamanhoArray = posicao.length;
    for(i=0;i< tamanhoArray;i++){ 
        //verifica se é a primeira linha
        if(posicao[i][0] == 1){
            if(posicao[i][1] == 1){
                quantidadeLinha1+=1;
            }
            if(posicao[i][1] == 2){
                quantidadeLinha1+=1;
            }
            if(posicao[i][1] == 3){
                quantidadeLinha1+=1;
            }
            if(quantidadeLinha1 ==3){
                return exibirResultado("JOGADOR VENCEDOR: "+jogador);
            }
        }  
    
        //linha 2
        if(posicao[i][0] == 2){
            if(posicao[i][1] == 1){
                quantidadeLinha2+=1;
            }
            if(posicao[i][1] == 2){
                quantidadeLinha2+=1;
     
             }
            if(posicao[i][1] == 3){
                quantidadeLinha2+=1;
            }
            if(quantidadeLinha2 == 3){
                return exibirResultado("JOGADOR VENCEDOR: "+jogador);
            }
     }  
    
        //linha 3
        if(posicao[i][0] == 3){
            if(posicao[i][1] == 1){
                quantidadeLinha3+=1;
            }
            if(posicao[i][1] == 2){
                quantidadeLinha3+=1;
            }
            if(posicao[i][1] == 3){
                quantidadeLinha3+=1;
            }
            if(quantidadeLinha3 == 3){
                return  exibirResultado("JOGADOR VENCEDOR: "+jogador);
            }
        }  
    }
}

function vertical(posicao) {
    let quantidadeColuna1 = 0;
    let quantidadeColuna2 = 0;
    let quantidadeColuna3 = 0;

    tamanhoArrayColuna = posicao.length;
    for(i=0;i< tamanhoArrayColuna;i++){ 
        //coluna1
        if(posicao[i][1] == 1){
            if(posicao[i][1] == 1){
                quantidadeColuna1+=1;
            }
            if(posicao[i][1] == 2){
                quantidadeColuna1+=1;
            }
            if(posicao[i][1] == 3){
                quantidadeColuna1+=1;
            }
            if(quantidadeColuna1 == 3){
                return exibirResultado("JOGADOR VENCEDOR: "+jogador);
            }
        }
        //coluna2
        if(posicao[i][1] == 2){
            if(posicao[i][1] == 1){
                quantidadeColuna2+=1;
            }
            if(posicao[i][1] == 2){
                quantidadeColuna2+=1;
            }
            if(posicao[i][1] == 3){
                quantidadeColuna2+=1;
            }
            if(quantidadeColuna2 == 3){
                return exibirResultado("JOGADOR VENCEDOR: "+jogador);
            }
        }

        //coluna3
        if(posicao[i][1] == 3){
            if(posicao[i][1] == 1){
                quantidadeColuna3+=1;
            }
            if(posicao[i][1] == 2){
                quantidadeColuna3+=1;
            }
            if(posicao[i][1] == 3){
                quantidadeColuna3+=1;
            }
            if(quantidadeColuna3 == 3){
                return exibirResultado("JOGADOR VENCEDOR: "+jogador);
            }
        }
    }
}

function diagonal(posicao) {
    let quantidadeDiagonal1 = 0;
    let quantidadeDiagonal2 = 0;

    tamanhoArrayDiagonal = posicao.length;
    for(i=0;i< tamanhoArrayDiagonal;i++){ 
        
        if(posicao[i][0] == 1 && posicao[i][1]==3){
            quantidadeDiagonal1+=1;
        }
        if(posicao[i][0] == 2 && posicao[i][1]==2){
            quantidadeDiagonal1+=1;
        }
        if(posicao[i][0] == 3 && posicao[i][1]==1){
            quantidadeDiagonal1+=1;
        }
        if(quantidadeDiagonal1 == 3){
            return exibirResultado("JOGADOR VENCEDOR: "+jogador);
        }

        if(posicao[i][0] == 1 && posicao[i][1]==1){
            quantidadeDiagonal2+=1;
        }
        if(posicao[i][0] == 2 && posicao[i][1]==2){
            quantidadeDiagonal2+=1;
        }
        if(posicao[i][0] == 3 && posicao[i][1]==3){
            quantidadeDiagonal2+=1;
        }
        if(quantidadeDiagonal2 == 3){
            return exibirResultado("JOGADOR VENCEDOR: "+jogador);
        }
    }
}

function selecionarArea(posicaoLinha, posicaoColuna) {
    posicaoArea(posicaoLinha, posicaoColuna,jogador);
    desenharSimbolo(jogador, posicaoLinha, posicaoColuna);
    verificaEmapate();
    verificaVencedor(posicaoX, posicaoO);
    checaJogador();
}