function calcular() {
    var vel = document.querySelector('input#txtn')
    var v = Number(vel.value)
    var res = document.querySelector('div#res')
    res.innerHTML = `A velocidade verificada foi de <strong>${v} KM/h</strong>.`
    if (v >  110) {
        res.innerHTML += ' Veículo multado!'
    }
    res.innerHTML += '<p>Dirija sempre com cinto de segurança!</p>'
}