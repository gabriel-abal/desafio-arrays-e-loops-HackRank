var precos = [100, 500, 100, 200, 50];

let menorValor = 1000000;
let valorTotal = 0;

//valor total
for (let preco of precos) {
    valorTotal += preco

}

//menor valor
for (let preco of precos) {
    if (menorValor > preco) {
        menorValor = preco;
    }
}

// resolucao    
if (precos.length >= 5) {
    console.log(valorTotal - menorValor)
} else {
    console.log(valorTotal)
}