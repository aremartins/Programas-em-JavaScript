function calcular() {
    var vel = document.querySelector('input#txtn')
    var v = Number(vel.value)
    var res = document.querySelector('div#res')

    if (v >  110) {
        res.innerHTML = `A velocidade verificada foi de ${v} km/h. Veículo multado!`
    }
}