//calcular a perda minima de cada ano em sequencia
//

const precos = [20, 15, 8, 2, 12];
let menorPrejuizo = 10000000;


for (let x = 0; x < precos.length; x++) {
    for (let y = x + 1; y < precos.length; y++) {
        const compra = precos[x];
        const venda = precos[y]
        const prejuizo = compra - venda;

        if (prejuizo > 0) {
            // realmente é prejuizo
            if (prejuizo < menorPrejuizo) {
                menorPrejuizo = prejuizo;
            }
        }
    }
}

console.log(menorPrejuizo);