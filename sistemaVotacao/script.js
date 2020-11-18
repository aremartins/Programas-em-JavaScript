function verificar() {
    let txtidade = document.querySelector('input#txtida')
    let idade = Number(txtidade.value)
    let res = document.getElementById('res')
    res.innerHTML = `Idade informada: ${idade} anos.`
    if(idade < 16) {
        res.innerHTML += "<p>Não vota.</p>"
    } else if (idade >= 16 && idade < 18 || idade >= 65) {
        res.innerHTML += "<p> Voto opcional.</p>"
    } else {
        res.innerHTML += "<p>Voto obrigatório</p>"
    }
}