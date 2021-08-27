


/* Exercício 1*/

/*let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)*/
/*
a.  undefined index.js:4:9
b.  null index.js:7:9
c.  11 index.js:10:9
d.  3 index.js:13:9
e.  Array(11) [ 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, … ]
f.  9
*/

/*Exercício 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
 
resp:  SUBI NUM ÔNIBUS EM MIRROCOS 27 */

/*Exercício 3
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!



const nomeDoUsuario = prompt ("nomeDoUsuario")
const emailDoUsuario= prompt ("digite seu email")
const frase = " O email do usuario " + emailDoUsuario + "foi cadastrado com sucesso. Seja bem vindo " + nomeDoUsuario
console.log (frase)*/

/*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
a) Imprima no console o array completo
 b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
 c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista


array = ["salada de fruta", "pizza", " chocolate", "lasanha"]
console.log ('"Essas são minhas comidas Preferidas"') 
console.log ('salada de frutas') 
console.log ('pizza') 
console.log ('chocolate') 
console.log ('lasanha') 

const comidaPreferida = prompt ("Qual a sua comida Preferida?")
console.log (comidaPreferida) //lasanha foi a resposta do usuario

array [i=1] = prompt ("Qual sua comida preferida?")
console.log ('chocolate', array)*/

/*3. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c) Imprima o array no console
d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no consoleImprima no console
💡  Dica
Para remover um item de um array, você pode utilizar a função splice!
    Caso não se lembre como ela funciona, não tem nenhum problema: uma breve pesquisa no google te trará vários exemplos.*/


let array[]
const listaDeTarefas = array
array = [ tarefa1 , tarefa2 , tarefa3].;
const tarefa1 = prompt ("Digite a primeira tarefa")
const tarefa2 = prompt ("Digite a segunda tarefa")
const tarefa3 = prompt ("Digite a terceira tarefa")

console.log (array)

//______________________________________________________________________________________________//


// EXERCICIOS DE INTERPRETACAO DO CODIGO


  




  // a.
  // const listaDeTarefas = []
  // const primeiraTarefa = prompt("Digite uma tarefa")
  // const segundaTarefa = prompt("Digite uma tarefa")
  // const terceiraTarefa = prompt("Digite uma tarefa")
  
  // listaDeTarefas.push(primeiraTarefa)
  // listaDeTarefas.push(segundaTarefa)
  // listaDeTarefas.push(terceiraTarefa)
  
  // // c.
  // console.log(listaDeTarefas)
  
  // d.
  // const tarefaRealizada = prompt("Digite o índice de uma tarefa que já realizou: 0, 1 ou 2")
  
  // listaDeTarefas.splice(Number(tarefaRealizada), 1)
  // console.log(listaDeTarefas)
  
  // DESAFIOS
  
  // 1.
  
  // const minhaFrase = "Eu amo Javascript!"
  // const minhaFraseArray = minhaFrase.split(" ")
  // console.log(minhaFraseArray)
  
  // 2.
  
  const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
  
  const indexAbabaxi = frutas.indexOf("Abacaxi");
  const tamanhoArray = frutas.length;
  

  console.log("Index abacaxi: ", indexAbabaxi, "tamanho do array:", tamanhoArray);

  




  console.log("Index abacaxi: ", indexAbabaxi, "tamanho do array:", tamanhoArray);

