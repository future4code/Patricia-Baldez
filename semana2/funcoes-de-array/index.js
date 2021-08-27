//EXERCICIO DE INTERPRETAÇÃO DE CODIGO:
//1)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
  //})

  // aparece item, index,array...

  //2)
//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
  
  //0: Object { nome: "Amanda Rangel", apelido: "Mandi" }
​
//1: Object { nome: "Laís Petra", apelido: "Laura" }
​
//length: 2


//EXERCICIO DE ESCRITA DE CODIGO:
//UTILIZAR MAP FILTER

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// RESULTADO ESPERADO EM CADA ITEM:
// item A
// [
//   "Lupin", 
//   "Polly",
//   "Madame",
//   "Quentinho", 
//   "Fluffy", 
//   "Caramelo"
// ]

// item B
// [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Quentinho", raca: "Salsicha"}
// ]

// item C
//[
//   "Você ganhou um cupom de desconto de 10% para tosar o/a Madame!"
//   "Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!"
// ]
// 
// a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomePets = pets.map (pets => pets.nome)
console.log (nomePets)

// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
const cachrrosSalsicha = (pets => pets.nome)
console.log (cachorrosSalsicha)
// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"