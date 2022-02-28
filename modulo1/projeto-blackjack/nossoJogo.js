// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */
//              //Projeto 21

// console.log ("Bem vindo(a) ao jogo  21")

// let jogo = confirm ("Quer iniciar uma nova rodada")

// if (jogo){
//    let carta0U =  comprarCarta ( ) 
//    let carta1U = comprarCarta ( )
//    let carta0pc = comprarCarta ( )
//    let carta1pc = comprarCarta ( )

//    let pontosU = carta0U.valor  + carta1U.valor
//    let pontosPc = carta0pc.valor + carta1pc.valor
//          console.log (`Usuario - cartas ${carta0U.texto} ${carta1U.texto} -  ${pontosU} `)
//          console.log(`PC - cartas ${carta0pc.texto} ${carta1pc.texto} -  ${pontosPc}`)

//    if (pontosU ===  pontosPc){
// //       console.log("Empate!!!")
// //    }else if (pontosU <= 21 && pontosU > pontosPc){
// //       console.log("O usuário ganhou!!")
// //    }else {
// //       console.log("O computador ganhou!!")
// //    }



// // }else {
// //    console.log("O jogo acabou!!")
// // }

// //Desafio 



// let jogo = confirm(`Bem vindo ao jogo BlackJack!!!
// Quer inciar uma nova rodada?`)
// if (jogo) {
//    let carta0U = comprarCarta()
//    let carta1U = comprarCarta()
//    let carta0pc = comprarCarta()
//    let carta1pc = comprarCarta()
//    pontosU = carta0U.valor + carta1U.valor
//    pontosPc = carta0pc.valor + carta1pc.valor
//    let comprarMais = confirm(`Suas cartas são ${carta0U.texto} -  ${carta1U.texto}. A carta revelada do computador é ${carta0pc.texto} . 
// Deseja comprar mais cartas?`)

//    if (comprarMais) {
//       let cartaUMais = comprarCarta()
//       pontosU = carta0U.valor + carta1U.valor + cartaUMais.valor
//       confirm(`Usuario cartas - ${carta0U.texto} ${carta1U.texto} ${cartaUMais.texto} - Pontuação ${pontosU} \nComputador cartas ${carta0pc.texto} ${carta1pc.texto} - Pontuação ${pontosPc}`)
//       if (pontosU === pontosPc) {
//          alert((`Usuario cartas - ${carta0U.texto} ${carta1U.texto} ${cartaUMais.texto} - Pontuação ${pontosU}  \nComputador cartas ${carta0pc.texto} ${carta1pc.texto} - Pontuação ${pontosPc}` + "\n" + "Empate!!!"))
//       } else if  ( pontosU<=21 && pontosU > pontosPc) {
//          alert((`Usuario cartas - ${carta0U.texto} ${carta1U.texto} ${cartaUMais.texto} - Pontuação ${pontosU} \nComputador cartas ${carta0pc.texto} ${carta1pc.texto} - Pontuação ${pontosPc}` + "\n" + "O usuário ganhou!!"))
//       } else {
//          alert((`Usuario cartas - ${carta0U.texto} ${carta1U.texto} ${cartaUMais.texto} - Pontuação ${pontosU} \nComputador cartas ${carta0pc.texto} ${carta1pc.texto} - Pontuação ${pontosPc}` + "\n" + "O computador ganhou!!"))
//       }

//    }
// }



// else {
//    alert(" O Jogo Acabou!!")



// }
