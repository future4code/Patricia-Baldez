//1)const filme = {
	//nome: "Auto da Compadecida", 
	//ano: 2000, 
	//elenco: [
		//"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		//"Virginia Cavendish"
		//], 
//	transmissoesHoje: [
	//	{canal: "Telecine", horario: "21h"}, 
	//	{canal: "Canal Brasil", horario: "19h"}, 
	//	{canal: "Globo", horario: "14h"}
	//	]
//}*

//console.log(filme.elenco[0])
//console.log(filme.elenco[filme.elenco.length - 1])
//console.log(filme.transmissoesHoje[2])*/

// Live reload enabled. 
//1.Matheus Nachtergaele index.js:15:9
//2.Virginia Cavendish index.js:16:9
​//3.canal: "Globo" horario: "14h"

//2)const cachorro = {
	//nome: "Juca", 
	//idade: 3, 
	//raca: "SRD"
//}

//const gato = {...cachorro, nome: "Juba"}

//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//console.log(cachorro)
//console.log(gato)
//console.log(tartaruga)*/

//Este deu erro

//3)function minhaFuncao(objeto, propriedade) {
	//return objeto[propriedade]
//}

//const pessoa = {
  //nome: "Caio", 
 // idade: 23, 
 // backender: false
//}

//console.log(minhaFuncao(pessoa, "backender"))
//console.log(minhaFuncao(pessoa, "altura"))*/
//Esta dando erro

//1.
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// Exemplo de entrada
//const pessoa = {
  // nome: "Amanda", 
  // apelidos: ["Amandinha", "Mandinha", "Mandi"]
//}

//Exemplo de saída
//"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi*/


//const objeto = {
   // nome: "Amanda",
   // apelidos: ["Amandinha","Mandinha","Mandi"],
//}
//const frase = (`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} //ou ${objeto.apelidos[2]}.`)

//console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou $///{objeto.apelidos[2]}.`)

//2)
    //const pessoa = {
       // nome: "Bruno", 
      //idade: 23, 
       // profissao: "Instrutor"
    //}
   // const pessoa2 = {
       // nome: "Patricia", 
      //idade: 35, 
        //profissao: "Estudante"
   // }    
    //minhaFuncao(pessoa, pessoa2)=>
    //return array [nome, nome.lenght, idade, profissão, profissão.lenght]
    //console.log (minhaFuncao())
    
    // Retorno: ["Bruno", 5, 23, "Instrutor", 9]

//3)
const carrinho = []

const fruta1 = {
nome: "morango",
disponibilidade: true
}
const fruta2 = {
    nome: "Abacaxi",
    disponibilidade: true
}
cont frura3 = {
    nome: "melão",
    disponibilidade: true

}

function funcaoFrutas(){
    carrinho.puch (fruta1, fruta2, fruta3)
    return carrinho
}

console.log(carrinho)