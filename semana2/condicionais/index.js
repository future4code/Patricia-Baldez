// 1) EXERCICIO DE INTERPRETAÇÃO DE CODIGO:

//const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? O progrma testa se os numerois são pares
// b) Para que tipos de números ele imprime no console "Passou no teste"? Para os numeros pares.
// c) Para que tipos de números a mensagem é "Não passou no teste"?
// para os numeros impares.
//________________________________________________________________________________________________________

// 2)EXERCICIO DE INTERPRETAÇÃO DE CODIGO:

//let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima? 
// Serve para verificar o preço das frutas, onde o usuario ira escolher uma fruta e irá aparecer o valor..

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//O preço da fruta  maçã  é  R$  5

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? 
//O preço da fruta  pera  é  R$  5,5
//_____________________________________________________________________________________________________________

//3) EXERCICIO DE INTERPRETAÇÃO DE CODIGO:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo? 
//Esta pedindo para o usuario digitar um numero..

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Se o usuario digitar 10, passou no teste; se digitar -10, não aparece nada...

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. faltou informar else, pois so esta lendo se for >0;

//__________________________________________________________________________________________________________

//1)EXERCICIO DE ESCRITA DE CODIGO:

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// const idadeDoUsuario = prompt("Digite sua idade")
// const idade = Number(idadeDoUsuario)

// if (idade > = 18) {
//   console.log("Você pode dirigir.")
// } else {
//   console.log("Você não pode dirigir.")
//__________________________________________________________________________________________________________

//2)EXERCICIO DE ESCRITA DE CODIGO:

 // const turnoAlunoEstuda = prompt ("Em qual turno você estuda? Didite M para manhã/T para tarde/N para noite").toLowerCase()
// if (turnoAlunoEstuda === "m"){
//   console.log ("Bom dia!")
// }else if(turnoAlunoEstuda === "v"){
//     console.log ("Boa tarde!")
// }else if(turnoAlunoEstuda === "n"){
//     console.log ("Boa noite!")
// }else {
//     console.log ("Digite um turno válido")
// }
// horarios(TurnoAlunoEstuda)__________________________________________________________________________________________________________

//3)EXERCICIO DE ESCRITA DE CODIGO:

// const turnoAlunoEstuda = prompt ("Em qual turno você estuda? Didite M para manhã/T para tarde/N para noite").toLowerCase()
// switch (turnoAlunoEstuda){
// case  "m":
//   console.log ("Bom dia!")
//   break
// case "v":
//     console.log ("Boa tarde!")
//     break
// case "n":
//     console.log ("Boa noite!")
//     break
//     default:

// console.log ("Digite um turno válido!")
// break
// }

//__________________________________________________________________________________________________________

//4)EXERCICIO DE ESCRITA DE CODIGO:

// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const generoFilme = prompt ("Qual gênero do filme")
// const precoIngressoFilme = prompt ("Qual o preço do filme")

// if (generoFilme === "fantasia" && precoIngressoFilme <= 15){
// console.log ("Bom filme")                                           
// }else{

//     console.log ("Escolha outro filme :( ")
// }
//__________________________________________________________________________________________________________

//DESAFIO:

//__________________________________________________________________________________________________________

//1)DESAFIO;

