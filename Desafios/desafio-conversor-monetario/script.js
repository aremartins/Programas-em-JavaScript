var cot = Number.parseFloat(prompt("Informe a cotação do dólar"))
function Converter(){
var val = Number.parseFloat(prompt("Quantos R$ você tem para comprar em dólares?"))
var dol = val/cot
var US$ = dol.toLocaleString('pt-BR', {style:'currency', currency:'USD'})
var res = document.getElementById('res')
res.innerHTML = `Você conseguirá comprar ${US$} dólares `


}