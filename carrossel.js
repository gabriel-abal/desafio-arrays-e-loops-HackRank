// carrossel com 7 imagens ( array de 0 a 6)
// 1. calcular o indice da imagem que deve ser exibida
// ler cada comando da sequencia
// se for para > avançar 1, se for < voltar 1

let sequencia = ">><<<<<<<<<<"
let inicio = 0;


for (let x of sequencia) {

    //direcao da imagem
    if (x === ">") {
        inicio++;
    } else if (x === "<") {
        inicio--;
    }

    //limitador da sequencia
    if (inicio === 7) {
        inicio = 0
    } else if (inicio === -1) {
        inicio = 6
    }
}

console.log(inicio);

