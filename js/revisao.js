// Tipo nome = valor

// Não aceita numero no inicio
// let 1nome = "Murilo" - ERRADO

// Aceita numero no meio e no final
// let nome1 = "Murilo" - CERTO

// Aceita numero sifrão ($) no inicio
// let $nome = "Murilo" - CERTO

let nome = "Murillo"
nome = "Murilo"

console.log(nome)

// let nome = "Murilo" -> String
// let idade = 17 -> Number
// let maiorDeIdade = false -> Boolean

let aluno = {
    nome: "Sarah",
    idade: 19
}

// Operadores de Comparação
// -> ==
// -> !=
// -> <
// -> >
// -> >=
// -> <=

// Operadores Aritméticos
// -> +
// -> ++
// -> -
// -> --
// -> *
// -> **
// -> /
// -> %

// Operadores Lógicos
// -> AND - &&
// -> OR - ||
// -> NOT - !

// Estruturas Condicionais
// -> IF
// -> ELSE IF
// -> ELSE
// -> SWITCH

// Estruturas de Repetição
// -> WHILE
// -> FOR
// -> DO WHILE

let senha

do {
    senha = prompt("Informe sua senha:")
} while (senha != "12345678");

// SEM Paramtero
function nome(){
    console.log("Olá")
}
nome()

// COM Parametro
function nomeP(nome){
    console.log(`Olá ${nome}`)
}
nomeP("Matheus")

// Função Anonima
const soma = function(){

}

// COM Retorno
function quadrado(n){
    return n*n
}
console.log(quadrado(5))

// Arrow Function
const dobrar = (n) => {
    console.log(2*n)
}
dobrar(5)