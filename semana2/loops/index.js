// EXERCICIO DE LEITURA DE CODIGO:
// 1)
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// RESULTADO = 10
// EXEMPLO conta 5 vezes;

// 0+1=1 2
// 1+1=2 4
// 2+1=3 6
// 3+1=4 8
// 4+1=5 10


// ____________________________________________________________________________________________________________
// 2) LEITURA DE CODIGO:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let i = 0
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero, "indice",i)
// 	}
//  i++
// }


// a) O que vai ser impresso no console?
// RESP: numeros maiores que 18..., 19, 21, 23, 25, 27, 30
// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso? RESP:_ _ _.
// ____________________________________________________________________________________________________________

// 3)Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// RESP: não teve resultado, entra em loop...
// ____________________________________________________________________________________________________________
// EXERCICIO DE ESCRITA DE CODIGO:

// 1) Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//         Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

//     c) Por fim, imprima o array com os nomes dos bichinhos no console

// const bichinhoDeEstimacao = Number(prompt("Quantos bichinhos de estimação vocẽ tem?"))
// console.log (bichinhoDeEstimacao)

// if (bichinhoDeEstimacao === 0 ) {
//     console.log ("Que pena! você pode adotar um pet!") }
// if (bichinhoDeEstimacao > 0){

// let arrayBichinhoDeEstimacao = []

// for (let i = 0; i < bichinhoDeEstimacao; i++){

// arrayBichinhoDeEstimacao.push(prompt("Digite nome de seus bichinhos"))
// }
// console.log (arrayBichinhoDeEstimacao)

//}

// 2)Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
// a) Escreva um programa que **imprime** cada um dos valores do array original.

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

 const arrayOriginal = [5, 10, 15, 20, 25]
// function imprimeArrayOriginal (arrayOriginal){
// for(let valor of arrayOriginal){
// console.log (valor)
// }
// }
// imprimeArrayOriginal(arrayOriginal)

function imprimeArrayOriginal (arrayOriginal){
    for(let valor of arrayOriginal){
    console.log (valor/10)
    }
    }
    imprimeArrayOriginal(arrayOriginal)

