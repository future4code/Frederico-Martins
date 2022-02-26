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
             //Projeto 21

console.log ("Bem vindo(a) ao jogo  21")

let jogo = confirm ("Quer iniciar uma nova rodada")

if (jogo){
   let carta0U =  comprarCarta ( ) 
   let carta1U = comprarCarta ( )
   let carta0pc = comprarCarta ( )
   let carta1pc = comprarCarta ( )

   let pontosU = carta0U.valor  + carta1U.valor
   let pontosPc = carta0pc.valor + carta1pc.valor
         console.log (`Usuario - cartas ${carta0U.texto} ${carta1U.texto} -  ${pontosU} `)
         console.log(`PC - cartas ${carta0pc.texto} ${carta1pc.texto} -  ${pontosPc}`)

   if (pontosU ===  pontosPc){
      console.log("Empate!!!")
   }else if (pontosU > pontosPc){
      console.log("O usuário ganhou!!")
   }else {
      console.log("O computador ganhou!!")
   }



}else {
   console.log("O jogo acabou!!")
}

