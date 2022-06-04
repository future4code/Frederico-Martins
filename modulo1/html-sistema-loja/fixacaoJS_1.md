function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 var salario = 2000
 var comissaoPercentualPorCarro = valorTotalVendas * 0.05
 var adicionalCarro = qtdeCarrosVendidos * 100
 
  return salario + comissaoPercentualPorCarro + adicionalCarro
 

}