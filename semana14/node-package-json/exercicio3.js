/* Exercicio3 */
/* Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada. */

const fs = require('fs')
const listaDeTarefas = process.argv[2]
const novaTarefa =  process.argv[3]
const novaTarefaFormatada = `${novaTarefa}`

try{
    fs.appendFileSync(listaDeTarefas, novaTarefaFormatada, 'utf8')
    console.log("\x1b[32m", 'Tarefa inserida com sucesso')
} catch (err) {
    console.error(err)
}