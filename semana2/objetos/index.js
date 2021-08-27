/* =======================
Exerícios de Interpretação
========================== */
// Exerício 1
// (a)
// "Matheus Nachtergaele"
// "Virginia Cavendish"
// { canal: "Globo", horario: "14h" }

// Exercício 2
// (a)
// { nome: "Juca", idade: 3, raca: "SRD" }
// { nome: "Juba", idade: 3, raca: "SRD" }
// { nome: "Jubo", idade: 3, raca: "SRD" }

// (b)
// A sintaxe três pontos antes de um objeto ou array
// é utilizada no Spread Operator (...), que faz uma
// cópia dos mesmos

// Exercício 3
// (a)
// false
// undefined

// (b)
// A função minhaFuncao recebe um objeto e o nome
// de uma propriedade que o objeto possua ou não
// e retorna o valor dela.

// O primeiro console log exemplifica a chamada
// da minhaFuncao com uma propriedade existente,
// já o segundo console log mostra que é retornado
// undefined quando o objeto não possui a propriedade
// passada como argumento

/* =======================
Exerícios de Desenvolvimento de Código
========================== */

// 1
// (a)

// const pessoa = {
//   nome: "Amanda",
//   apelidos: ["Amandinha", "Mandinha", "Mandi"]
// };

// function imprimePessoa(objeto) {
//   console.log(
//     `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
//   );
// }

// imprimePessoa(pessoa);

// (b)

// const novaPessoa = { ...pessoa, apelidos: ["Amands", "Mandis", "AMANDA"] };

// imprimePessoa(novaPessoa);

// Exercício 2
// (a)

// const pessoa = {
//   nome: "Bruno",
//   idade: 23,
//   profissao: "Instrutor"
// };

// (b)

// Retorno: ["Bruno", 5, 23, "Instrutor", 9]

// function imprimeInformacoes(individuo) {
//   return [
//     individuo.nome,
//     individuo.nome.length,
//     individuo.idade,
//     individuo.profissao,
//     individuo.profissao.length
//   ];
// }

// console.log(imprimeInformacoes(pessoa));

// Exercício 3
// (a)
// const carrinho = [];

// (b)
// const abacaxi = {
//   nome: "abacaxi",
//   disponibilidade: true
// };

// const melancia = {
//   nome: "melancia",
//   disponibilidade: true
// };

// const tomate = {
//   nome: "tomate",
//   disponibilidade: true
// };

// (c)
// function adicionaFrutaNoCarrinho(fruta) {
//   carrinho.push(fruta);
// }

// adicionaFrutaNoCarrinho(abacaxi);
// adicionaFrutaNoCarrinho(melancia);
// adicionaFrutaNoCarrinho(tomate);

// (d)
// console.log(carrinho);

/* =======================
Desafios
========================== */

// 1
// function criaPessoa() {
//   const pessoa = {
//     nome: prompt("Nome da pessoa:"),
//     idade: Number(prompt("Idade da pessoa:")),
//     profissao: prompt("Profissão da pessoa:")
//   };

//   console.log(pessoa);
//   console.log(typeof pessoa);
// }

// criaPessoa()

// 2
// function comparaAnoDeLancamento(primeiroFilme, segundoFilme) {
//   return `O primeiro filme foi lançado antes do segundo? ${
//     primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento
//   }
// O primeiro filme foi lançado no mesmo ano do segundo? ${
//     primeiroFilme.anoDeLancamento === segundoFilme.anoDeLancamento
//   }`;
// }

// const matrix = {
//   nome: "Matrix",
//   anoDeLancamento: 1999
// };

// const johnWick = {
//   nome: "John Wick",
//   anoDeLancamento: 2014
// };

// console.log(comparaAnoDeLancamento(matrix, johnWick));

// 3
// function inverteDisponibilidade(fruta) {
//   return {...fruta, disponibilidade: !fruta.disponibilidade}
// }

// console.log(inverteDisponibilidade(abacaxi))
// console.log(inverteDisponibilidade(inverteDisponibilidade(abacaxi)))