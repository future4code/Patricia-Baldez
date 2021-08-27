
/* Exercícios de interpretação de código**

   Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
1. Leia o código abaixo*/

        /*function minhaFuncao(variavel) {
        	return variavel * 5
        }

        console.log(minhaFuncao(2))
        console.log(minhaFuncao(10))

        
 /* a) O que vai ser impresso no console? 
 // resposta: 10
           // 50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?


2. Leia o código abaixo */

        
        /*let textoDoUsuario = prompt("Insira um texto");

        const outraFuncao = function(texto) {
        	return texto.toLowerCase().includes("cenoura")
        }

        const resposta = outraFuncao(textoDoUsuario)
        console.log(resposta)

        
/* a. Explique o que essa função faz e qual é sua utilidade
como tem o return texto.toLowerCase()as palavras passam tudo para minusculas .includes("cenoura") não importando o que vem atrs ou na fente....

 b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i.   `Eu gosto de cenoura`
// true
ii.  `CENOURA é bom pra vista`
// true
iii. `Cenouras crescem na terra`*/
// true
// --------------------------------------------------------------------------------------------------//

// 1) 
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

//function imprimeDados( nome, idade, estado, profissao){
//return `Eu sou ${nome}, tenho ${idade} anos, moro em ${estado} e sou ${profissao}`
//}
//onsole.log (imprimeDados("Patricia", "35", "Rio Grande do Sul", "Estudante"))




   




//EXERCÍCIO DE INTERPRETAÇÃO
//1

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2)) //10
// console.log(minhaFuncao(10)) //50

//a) 10 e 50

//b) Não vai aparecer nada no console.

//2

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a) A função recebe como parâmetro um texto, passa para caixa baixa todas as letras e verifica se a string cenoura aparece em algum momento.

//b i. true ii. true iii. true

//ESCRITA DE CÓDIGO
//1
// //a)
// const nome = 'Amanda'
// const idade = 33
// const cidade = 'Poços de Caldas'
// const estudante = 'não sou estudante'


// function imprimeMensagem() {
// 	console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}`)
// }

// imprimeMensagem()

// //b

// function formaFrase(nome, idade, cidade, profissao) {
// 	return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
// }

// const frase = formaFrase('Amanda', 33, 'Poços de Caldas', 'Dev')

// console.log(frase)
// console.log(formaFrase('Amanda', 33, 'Poços de Caldas', 'Dev'))

//2
//a)
function somaDoisNumeros(numero1, numero2) {
	return numero1 + numero2
}

const resultado = somaDoisNumeros(10, 30)
console.log('A)', resultado)

//b
function verificaMaiorNumero(numero1, numero2) {
	return numero1 >= numero2	
}

const primeiroNumeroMaior = verificaMaiorNumero(35, 30)
console.log('B)', primeiroNumeroMaior)

//c
function verificaParidade(numero) {
	return numero % 2 === 0
}

const ehPar = verificaParidade(4)
console.log('C)', ehPar)

//d
function retornaTamanho(texto) {
	return `${texto.length}, ${texto.toUpperCase()}`
}

console.log('D)', retornaTamanho('Olá galerinha linda'))

//3

function soma(numero1, numero2) {
	return numero1 + numero2
}

function subtrai(numero1, numero2) {
	return numero1 - numero2
}

function multiplica(numero1, numero2) {
	return numero1 * numero2
}

function divide(numero1, numero2) {
	return numero1 / numero2
}

// const primeiroNumero = Number(prompt('Insira o primeiro número'))
// const segundoNumero = Number(prompt('Insira o segundo número'))

// console.log('Soma: ', soma(primeiroNumero, segundoNumero))
// console.log('Diferença: ', subtrai(primeiroNumero, segundoNumero))
// console.log('Multiplicação: ', multiplica(primeiroNumero, segundoNumero))
// console.log('Divisão: ', divide(primeiroNumero, segundoNumero))

//DESAFIOS

//1
//a

const imprimeNoConsole = (variavel) => {
	console.log(variavel)
}

// imprimeNoConsole('olá')

//b

const somaDoisValores = (valor1, valor2) => {
	const soma = valor1 + valor2
	imprimeNoConsole(soma)
}

somaDoisValores(10, 15)

//2
//a² = b² + c²

function calculaHipotenusa(b, c) {
	const hipotenusaAoQuadrado = b ** 2 + c ** 2
	const hipotenusa = hipotenusaAoQuadrado ** (1/2)
	return hipotenusa
}

const resultadoHipotenusa = calculaHipotenusa(2, 2)
console.log('Hipotenusa: ', resultadoHipote
/* Exercícios de interpretação de código**

   Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
1. Leia o código abaixo*/

        /*function minhaFuncao(variavel) {
        	return variavel * 5
        }

        console.log(minhaFuncao(2))
        console.log(minhaFuncao(10))

        
 /* a) O que vai ser impresso no console? 
 // resposta: 10
           // 50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?


2. Leia o código abaixo */

        
        /*let textoDoUsuario = prompt("Insira um texto");

        const outraFuncao = function(texto) {
        	return texto.toLowerCase().includes("cenoura")
        }

        const resposta = outraFuncao(textoDoUsuario)
        console.log(resposta)

        
/* a. Explique o que essa função faz e qual é sua utilidade
como tem o return texto.toLowerCase()as palavras passam tudo para minusculas .includes("cenoura") não importando o que vem atrs ou na fente....

 b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i.   `Eu gosto de cenoura`
// true
ii.  `CENOURA é bom pra vista`
// true
iii. `Cenouras crescem na terra`*/
// true


// 1) 
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

//function imprimeDados( nome, idade, estado, profissao){
//return `Eu sou ${nome}, tenho ${idade} anos, moro em ${estado} e sou ${profissao}`
//}
//onsole.log (imprimeDados("Patricia", "35", "Rio Grande do Sul", "Es


