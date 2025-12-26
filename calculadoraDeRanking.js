let vitorias = 100
let derrotas = 37

//Calculando o saldo 

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas
}
//Ver qual nível está

function definirNivel(vitorias) {
    let nivel

    if (vitorias < 10) {
        nivel = "Ferro"
    } else if (vitorias <= 20) {
        nivel = "Bronze"
    } else if (vitorias <= 50) {
        nivel = "Prata"
    } else if (vitorias <= 80) {
        nivel = "Ouro"
    } else if (vitorias <= 90) {
        nivel = "Diamante"
    } else if (vitorias <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    return nivel
}

let saldoVitorias = calcularSaldo(vitorias, derrotas)
let nivel = definirNivel(vitorias)

console.log(`O Herói tem o saldo de vitórias de ${saldoVitorias} e está no nível de ${nivel}`)

    