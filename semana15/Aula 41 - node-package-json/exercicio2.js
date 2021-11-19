/* Exercicio2 */
/* Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos. */

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

let resultado
if(operacao === 'add'){
    resultado = num1 + num2
    console.log("\x1b[33m", 'Resposta: ', resultado)
} 
else if(operacao === 'sub'){
    resultado = num1 - num2
    console.log("\x1b[34m", 'Resposta: ', resultado)
} 
else if(operacao === 'mult'){
    resultado = num1 * num2
    console.log("\x1b[35m", 'Resposta: ', resultado)
} 
else if(operacao === 'div') {
    resultado = num1 / num2
    console.log("\x1b[36m", 'Resposta: ', resultado)
}
else {
    resultado = 
    console.log("\x1b[31m", 'Erro! Realize uma operação matemática válida.')
}