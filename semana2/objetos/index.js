function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
	let quantidade = 0

  for (let number of arrayDeNumeros){
    if (number === numeroEscolhido){
      quantidade++
    }
  }

  if(quantidade === 0){
		return "Número não encontrado"
  } else {
    return `O número ${numeroEscolhido} aparece ${quantidade}x`
  }
}