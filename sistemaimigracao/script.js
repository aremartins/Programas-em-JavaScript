function verificar() {
    var pais = document.getElementById('txtpais')
    var origem = pais.value
    let res = document.querySelector('div#res')
    res.innerHTML = `País informado: ${origem}`
    if (origem == 'Brasil'){
        res.innerHTML += "<p>Apresente seu RG.</p>"
    }else{
        res.innerHTML += "<p>Apresente sua RNE.</p>"
    }

}