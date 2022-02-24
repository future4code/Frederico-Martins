//Exercicio de interpretação de codigo

//1)
//Vai imprimir na tela tudo que esta escrito dentro do array o index que encontra um valor dentro de ,
//uma string e o item que e as coisas que estao dentro do array
//{ nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },
// { nome: "Letícia Chijo", apelido: "Chijo" }

//2)va aparecer os nomes que estao dentros do array
//['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']
//0: "Amanda Range;l"
//1: "Laís Petra"
//2: "Letícia Chijo"
//length 3

//3 Vai aparecer informações dos dois primeiros array
// { nome: "Amanda Rangel", apelido: "Mandi" },
//{ nome: "Laís Petra", apelido: "Laura" },

//  Exercícios de excreta de código
//1)
// //A)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha" },
//     { nome: "Polly", raca: "Lhasa Apso" },
//     { nome: "Madame", raca: "Poodle" },
//     { nome: "Quentinho", raca: "Salsicha" },
//     { nome: "Fluffy", raca: "Poodle" },
//     { nome: "Caramelo", raca: "Vira-lata" },]
// for (let pet of pets) {
//     console.log(pet.nome)
// }

// //B)
// const dogRacaSalsicha = []

// for (let i = 0; i < pets.length; i++) {

// //     if (pets[i].raca === "Salsicha") {
// //         dogRacaSalsicha.push(pets[i])


// //     }

// // }
// // console.log(dogRacaSalsicha)

// //C)
// // let cupomDesconto = []
// // for (let index = 0; index < pets.length; index++) {
// //     const element = pets[index].raca;
// //     if (element == "Poodle") {
// //         const cupom = "Parabéns você ganhou 10% de desconto para tosar" + pets[index].nome
// //         cupomDesconto.push(cupom)

// //     }
// // }
// // for (let index = 0; index < cupomDesconto.length; index++) {
// //     const element = cupomDesconto[index];  
// //     console.log(element)
// // }

// //2
// //A)
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const nomeProdu = produtos.map ((valor)=>{
// return valor.nome 

//  })
// console.log(nomeProdu)



// //B)   (valor , index, array)
// const desconto5por = produtos.map ((valordesconto) => {
// const objetonomepreco = {

// }
// objetonomepreco.nome = valordesconto.nome
// objetonomepreco.preco = (valordesconto.preco -valordesconto.preco * 0.05).toFixed(2)


// return objetonomepreco

// })
// console.log (desconto5por)


// //C)
// const bebidas = produtos.filter((valor)=>{
// return  valor.categoria == "Bebidas"

// })
// console.log (bebidas)


// //D)
// const palavraYpe = produtos.filter((valoryp)=>{
// return valoryp.nome.includes ("Ypê")

// })
// console.log (palavraYpe)

// //E)
// const frase = palavraYpe.map((valofrases) =>{
// return `Compre ${ valofrases.nome } por  ${valofrases.preco } `

// })
// console.log (frase)



