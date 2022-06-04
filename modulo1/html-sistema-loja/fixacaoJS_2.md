function calculaPrecoTotal(quantidade) {
let preco = 1.30
let promocao = 1
if (quantidade < 12){
  return quantidade * preco
}else {
  return quantidade * promocao
  
}}