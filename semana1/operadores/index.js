// EXERCÍCIOS DE INTERPRETAÇÃO

/* Exercício 1
const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
// true && false => false!
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 
// true && false && true => false && true => false
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2) 
// true && (true || false) => true && true => true
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) // d. boolean
*/

/* Exercício 2
 O código não está fazendo a soma pois os valores recebidos não sao números, mas sim strings!
 Assim sendo, o console.log apenas junta os dois números
*/

// Exercício 3
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = Number(primeiroNumero) + Number(segundoNumero)

// console.log(soma)

// EXERCÍCIOS DE ESCRITA

// Exercício 1
// const minhaIdade = Number(prompt("Digite sua idade"));
// const idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo"));

// const comparaIdades = minhaIdade > idadeAmigo;
// console.log("Sua idade é maior do que a do seu melhor amigo?", comparaIdades);

// const diferencaIdade = minhaIdade - idadeAmigo;
// console.log("Diferença entre as idades:", diferencaIdade);

// Exercício 2
// const numero = prompt("Insira um número par");
// console.log("Resto da divisão por 2", Number(numero) % 2);

// O padrão é que o resto da divisão de um número par por 2 sempre será 0
// Quando o número ímpar é inserido, o resto da divisão dele por 2 é sempre 1

// Exercício 3
// const idade = Number(prompt("Digite sua idade"))

// console.log("a. Idade em meses", idade*12)
// console.log("b. Idade em dias", idade*365)
// console.log("c. Idade em horas", idade*365*24)

// Exercício 4
// const num1 = Number(prompt("Digite um número"))
// const num2 = Number(prompt("Digite outro número"))

// console.log("O primeiro numero é maior que segundo?", num1 > num2);
// console.log("O primeiro numero é igual ao segundo?", num1 === num2);
// console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 === 0);
// console.log("O segundo numero é divisível pelo primeiro?", num2 % num1 === 0);

// DESAFIOS

// Exercício 1
// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
// (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

// // item A
// let tempKelvin = (77 - 32)*(5/9) + 273.15
// console.log("Item a", tempKelvin, "°K")

// // item B
// let tempFahrenheit = 80 * (9/5) + 32
// console.log("Item b", tempFahrenheit, "°F")

// // item C
// tempKelvin = 30 + 273.15
// tempFahrenheit = 30 * (9/5) + 32
// console.log("Item c", tempFahrenheit, "°F e", tempKelvin, "°K")

// // item D
// const tempUsuario = Number(prompt("Insira uma temperatura em °C"))
// tempKelvin = tempUsuario + 273.15
// tempFahrenheit = tempUsuario * (9/5) + 32
// console.log("Item d", tempFahrenheit, "°F e", tempKelvin, "°K")

// Exercício 2
// const energiaConsumida = Number(prompt("Insira a energia consumida"));
// const desconto = Number(prompt("Insira a porcentagem de desconto"));

// const porcentagemDesc = 1 - desconto / 100;
// console.log(
//   "O custo da sua conta é R$",
//   0.05 * energiaConsumida * porcentagemDesc
// );

// Exercício 3
// console.log("a. 20lb equivalem a", 20 * 0.453592, "kg");
// console.log("b. 10.5oz equivalem a", 10.5 * 0.29767, "kg");
// console.log("c. 100mi equivalem a", 100 * 1609.34, "m");
// console.log("d. 50ft equivalem a", 50 * 0.3048, "m");
// console.log("e. 103.56gal equivalem a", 103.56 * 3.78541, "litros");
// console.log("f. 450 xic equivalem a", 450 * 0.15, "litros");

// const xicarasUsuario = Number(prompt("Insira uma quantidade em xícaras para saber o valor equivalente em litros"));
// console.log("g.", xicarasUsuario, "xic equivalem a", xicarasUsuario * 0.15, "litros");
