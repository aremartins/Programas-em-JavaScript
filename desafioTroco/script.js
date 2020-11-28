function Calcular(){
var prod = prompt("Qual produto deseja comprar")
var preco = Number(prompt("Qual o valor?"))
var precoR$ = preco.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
var pag = Number(prompt("Quanto em dinheiro você pagará?"))
var pagR$ = pag.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
var troco = pag - preco
var trocoR$= troco.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})
var res = document.getElementById('res')

window.alert (`Você comprou um ${prod}, que custou ${precoR$}. Deu ${pagR$} em dinheiro e recebeu ${trocoR$} de troco. Volte sempre!`)
res.style.textalign = 'center'
res.innerHTML = `Você comprou um ${prod}, que custou ${precoR$}. Deu ${pagR$} em dinheiro e recebeu ${trocoR$} de troco. Volte sempre!`

}