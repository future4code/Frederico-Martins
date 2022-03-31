// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
    //Desafio
    // return array.map((item, indice, list)=>{
    //     return list[list.length - indice - 1]
    //   })




}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => { return a - b })


}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter(item => item % 2 === 0)


}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return retornaNumerosPares(array).map(item => item ** 2)

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maioR = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element > maioR) {
            maioR = element
        }


    } return maioR
    // Math.max(...array)

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let menoR
    
        if (num1 > num2) {
            menoR = num2
        }else {
            menoR =  num1
        }
        let maioR = retornaMaiorNumero ([num1, num2 ] )
        let diferenca = maioR - menoR
        return {
            maiorNumero: retornaMaiorNumero ( [ num1, num2]),
            maiorDivisivelPorMenor: (maioR % menoR === 0),
            diferenca: diferenca

            


        }
    }
    // EXERCÍCIO 08
    function retornaNPrimeirosPares(n) {
        
      let array = [ ]
         for (let index = 0; n > array.length ; index++) {
             if (index % 2 === 0)
              array.push(index) 

             
         }
return array

    }

    // EXERCÍCIO 09
    function classificaTriangulo(ladoA, ladoB, ladoC) {
        if  (ladoA  ===  ladoB && ladoC === ladoB){
            return "Equilátero"
        }else if ( ladoA  != ladoB && ladoC != ladoB && ladoC != ladoA){
            return "Escaleno"
        }else {
            return "Isósceles"
        }

    }

    // EXERCÍCIO 10
    function retornaSegundoMaiorESegundoMenor(array) {
     let segundoMenor =   retornaArrayOrdenado (array).reverse ( ) [1]
     let segundoMaior = retornaArrayOrdenado ( array)  [1]
     console.log (segundoMaior, segundoMenor)
     console.log (retornaArrayOrdenado ( array)) 
     return  [ segundoMenor, segundoMaior]
    
    }

    // EXERCÍCIO 11
    function retornaChamadaDeFilme(filme) {
        let frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por `
         for (let index = 0; index < filme.atores.length  ; index++) {
             const element = filme.atores[index];
             console.log (index)
             if ( filme.atores.length -1 != index){
                frase += element +", "
                

             }else{
                frase += element +"."
             }
            
             
             
         }
         return frase

    }

    // EXERCÍCIO 12
    function retornaPessoaAnonimizada(pessoa) {
        pessoa.nome ="ANÔNIMO" 
        return pessoa


    }

    // EXERCÍCIO 13A
    function retornaPessoasAutorizadas(pessoas) {
        return pessoas.filter ( item => {
           
        return  item.idade > 14 && item.idade < 60 &&  item.altura >= 1.5
        })


    }

    // EXERCÍCIO 13B
    function retornaPessoasNaoAutorizadas(pessoas) {
        return pessoas.filter ( item => {
            console.log (item.idade <= 14  || item.idade > 60 ||  item.altura < 1.5 )
        return item.idade <= 14  || item.idade > 60 ||  item.altura < 1.5 
              

        })

    }

    // EXERCÍCIO 14
    function retornaContasComSaldoAtualizado(contas) {
            return contas.map ( (conta)=> {
    let sum =0
    for (let i = 0; i < conta.compras.length; i++) {
        sum -= conta.compras[i];
    }
    conta.saldoTotal += sum
      return  conta;
    })
    
        }

    

    // EXERCÍCIO 15A
    function retornaArrayOrdenadoAlfabeticamente(consultas) {
        consultas.sort(function (a, b) {
            if (a.nome > b.nome) {
              return 1;
            }
            if (a.nome < b.nome) {
              return -1;
            }
            return 0;
          });
        }
      


    // EXERCÍCIO 15B
    function retornaArrayOrdenadoPorData(consultas) {

        }