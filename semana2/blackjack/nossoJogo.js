/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem-Vindo(a)ao jogo blackjack")
let jogo = confirm ("Quer iniciar uma nova jogada?")
if (jogo){
  let carta1Usuario = compraCarta ()
  let carta2Usuario = compraCarta ()
  let carta1Pc = compraCarta ()
  let carta2Pc = compraCarta ()

  let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
  let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

  if (pontuacaoUsuario>pontuacaoPc){
     console.log(" O usuario ganhou!")
  }else if (pontuacaoPc > pontuacaoUsuario){
     console.log ("O computador ganhou!")
  }


}else{
   console.log("O jogo acabou!")
}