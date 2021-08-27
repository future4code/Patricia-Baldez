//EXERCICIO DE INTERPRETAÇÃO DE CODIGO:
//1)
//===========================================================================//
//const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
//===========================================================================//__________________________________________________________________________
  //resposta: 01)a)
  //{ nome: "Amanda Rangel", apelido: "Mandi" },0, todo o array
  //{ nome: "Laís Petra", apelido: "Laura" },1, todo o array
  //{ nome: "Letícia Chijo", apelido: "Chijo" },2, todo o array
  //==========================================================================
  //2)
  //===========================================================================//
  // const usuarios = [
  //   { nome: "Amanda Rangel", apelido: "Mandi" },
  //   { nome: "Laís Petra", apelido: "Laura" },
  //   { nome: "Letícia Chijo", apelido: "Chijo" },
  // ]
  
  // const novoArrayB = usuarios.map((item, index, array) => {
  //    return item.nome
  // })
  
  // console.log(novoArrayB)
//===========================================================================//
  //resposta: 02
 // { nome: "Amanda Rangel" }, { nome: "Laís Petra"},{ nome: "Letícia Chijo" },
  //3)
 //===========================================================================//
//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
//===========================================================================//
 //resposta//{ nome: "Amanda Rangel", apelido: "Mandi" }
 //{ nome: "Laís Petra", apelido: "Laura" }

//EXERCICIO DE ESCRITA DE CODIGO:
//UTILIZAR MAP FILTER
//===========================================================================//
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
//===========================================================================//
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
//===========================================================================//
// a) Crie um novo array que contenha apenas o nome dos doguinhos
//===========================================================================//
// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
//]

// const NovoArrayNomeDosPets = pets.map((pets) => {
//   return pets.nome;
// });
// console.log ("item a",NovoArrayNomeDosPets);
//===========================================================================//
//b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
//===========================================================================//
// const NovoArrayCachorrosSalsicha = pets.filter((cachorro) => {
//         return cachorro.raca === "Salsicha"
        
// });
// console.log("item b" ,NovoArrayCachorrosSalsicha);
//===========================================================================//
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]
//===========================================================================//
// const poodles = pets.filter((dog) => {
//         return dog.raca === "Poodle"
//         });
//===========================================================================//
// const cupomDesconto = poodles.map((poodles) => {
//      return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodles.nome}`
//  });
//   console.log ("item c",cupomDesconto);
//===========================================================================//
//2)
//===========================================================================// 
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//===========================================================================//
// a) Crie um novo array que contenha apenas o nome de cada item
//===========================================================================//
// const nomeItens = produtos.map((item, index, array) => {
//      return item.nome
//    })
  
//    console.log("resposta letra a",nomeItens)
//===========================================================================//
// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
//===========================================================================//
// const nomeItens = produtos.map((produto) => {
//        return {nome: produto.nome, preco: (produto.preco*0.95).toFixed(2)};
//      })
    
//      console.log("resposta letra b",nomeItens)
//===========================================================================//
// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
//===========================================================================//
// const bebidas = produtos.filter((produtos) => {
//   return produtos.categoria === "Bebidas";
// });
//           console.log("resposta letra c", bebidas);
//===========================================================================//
// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
//===========================================================================//
const produtosYpe = produtos.filter((prod) => {
  return prod.nome.includes("Ypê");
});
          console.log("resposta letra d", produtosYpe);

//===========================================================================//
//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê
//Você pode encadear o uso do map e do filter//
//===========================================================================//
const compreYpe = produtosYpe.map((prod) => {
  return `Compre ${prod.nome} por ${prod.preco}`;
    });
      
       console.log("resposta letra e",compreYpe);


//===========================================================================//
//DESAFIO:+++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++//

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]
//===========================================================================//
//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
//===========================================================================//

const nomePokemons = pokemons.map((poke) =>{
  return poke.nome;

})
console.log("letra a ",nomePokemons);
const pokemonsOrdenados = nomePokemons.sort ((a,b)=> a.localeCompare(b))

console.log("item a",pokemonsOrdenados);
//===========================================================================//

//b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**
const tipos = pokemons.map ((poke) => {
return poke.tipo
})
console.log(tipos);
const tiposSemReptir = tipos.filter((tipo,index,array)=>{
  return array.indexOf(tipo) === index;
});
console.log("item b",tiposSemReptir)
//===========================================================================//