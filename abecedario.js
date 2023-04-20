// Calcular quantas crianças perderam na rodada
// calcular quantas letras != do array de palavras
// se letra[0] != letra ++
// 1. listar todas as palavras do array
// 2. verificar se a primeira letra é diferente
// 3. se diferente, somar

const letra = 'm';
const palavras = [
    'mamao',
    'maca',
    'melao',
    'melancia',
    'laranja'
]
let quantidadeQuePerderam = 0;

for (x of palavras) {
    if (x[0] != letra) {
        quantidadeQuePerderam++;
    }
}

console.log(quantidadeQuePerderam);