function Converter() {
    let temp = Number.parseFloat(prompt("Digite uma temperatura em Cº (Celsius)"))
    let k = temp + 273
    let f = (temp * 1.8) + 32
    let res = document.querySelector('div#res')
    res.innerHTML = `<h1>A temperatura de ${temp} corresponde à:</h1><p>${k}ºK (kelvin)</p><p>${f}ºF (Fahrenheit)`

}