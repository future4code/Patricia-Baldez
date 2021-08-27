// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  altura = prompt("Digite altura:")
  largura = prompt("Digite largura:")
  area = altura * largura
  console.log(area)
  return area

}
calculaAreaRetangulo();
// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Em e ano estamos?"))
  const anoDoNascimento = Number(prompt("Qual ano de seu nascimento?"))
  idade = anoAtual - anoDoNascimento
  console.log(idade)
  return idade
}

imprimeIdade();
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  peso = Number (prompt (" Digite seu peso:"))
  altura = Number (prompt (" Digite sua altura:"))
  imc = peso / (altura * altura)
  console.log =(imc)
  
  }
calculaIMC();
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  return `Meu nome é ${nome}, tenho ${idade}, anos e meu email é ${email}`
  // Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}
imprimeInformacoesUsuario()
console.log(imprimeInformacoesUsuario("Patricia Baldez", 24, "patriciabaldez@gmail.com"))

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressosEspetaculo = custo / valorIngresso
  return ingressosEspetaculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}