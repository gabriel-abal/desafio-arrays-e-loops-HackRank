let = stringCorrompida = "*Canis %lupus )familiaris"
let nomePurificado = "";

for (let caracter of stringCorrompida) {

    if (caracter === "!" || caracter === "@" || caracter === "#" || caracter === "$" || caracter === "%" || caracter === "&" || caracter === "*" || caracter === "(" || caracter === '"' || caracter === ")") {

    } else {

        nomePurificado += caracter

    }

}

console.log(nomePurificado);