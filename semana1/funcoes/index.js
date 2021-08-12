/* Exercícios de interpretação de código**

   Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
1. Leia o código abaixo*/

        /*function minhaFuncao(variavel) {
        	return variavel * 5
        }

        console.log(minhaFuncao(2))
        console.log(minhaFuncao(10))

        
 /* a) O que vai ser impresso no console? 
 // resposta: 10
           // 50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
??????????????????????????????????????

2. Leia o código abaixo */

        
        /*let textoDoUsuario = prompt("Insira um texto");

        const outraFuncao = function(texto) {
        	return texto.toLowerCase().includes("cenoura")
        }

        const resposta = outraFuncao(textoDoUsuario)
        console.log(resposta)

        
/* a. Explique o que essa função faz e qual é sua utilidade
// se o usuario digitar cenoura = true
//se não = false

 b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i.   `Eu gosto de cenoura`
// true
ii.  `CENOURA é bom pra vista`
// true
iii. `Cenouras crescem na terra`*/
// true
//--------------------------------------------------------------------------------------------------//

// 1) 
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

function imprimeDados( nome, idade, estado, profissao){
return `Eu sou ${nome}, tenho ${idade} anos, moro em ${estado} e sou ${profissao}`
}
console.log (imprimeDados("Patricia", "35", "Rio Grande do Sul", "Estudante"))

//const nomePrompt = Prompt ( "inoforme seu nome")
//const idadePrompt = Prompt  ( "inoforme sua idade")
//const estadoPrompt = Prompt( "inoforme seu estado")
//const profissaoPrompt = Prompt( "informe sua profissao")
//imprimeNome (nomePrompt)



   // Patricia, tenho 35 anos, moro em Rio Grande do Sul e sou estudante."