let nome
let idade
                  /*Exercicio 1
                    Porque ainda não foi defino o tipo de variável*/
nome = prompt("Qual e seu nome?")
idade = prompt("Qual e sua idade?")
               /*Notei que o computador
               guardou o nome e a idade*/
console.log(typeof nome, typeof idade)
        console.log("O meu nome e", nome, "e tenho", idade, "de idade ")



                 /*Exercicio 2 */
let pergunta1 ="Jogou o lixo fora hoje?"
let resp1 = prompt(pergunta1)
console.log(pergunta1+' - '+resp1)
let pergunta2 ="Você fez as atividades hoje?"
let resp2 = prompt(pergunta2)
console.log(pergunta2+' - '+resp2)
let pergunta3 ="Você esta feliz?"
let resp3 = prompt(pergunta3)
console.log(pergunta3+' - '+resp3)
 
                /*Exercicio 3 */ 
let a = 10
let b = 25
let n1 = a
a = b
b = n1 
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10























