function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    var fano = document.getElementById('txtano')
    
    if (fano.value.length < 4 || fano.value > ano) {
        window.alert("Verifique os dados e tente novamente!")
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 3){
                img.setAttribute('src', 'babyboy.png')
            } else if( idade > 3 && idade < 10) {
                img.setAttribute('src', 'menino.png')
            } else if (idade > 10 && idade < 60) {
                img.setAttribute('src', 'youngman.png')
            } else  {
                img.setAttribute('src', 'senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'babygirl.png')
            } else if( idade > 3 && idade < 10) {
                img.setAttribute('src', 'menina.png')
            } else if (idade > 12 && idade < 60) {
                img.setAttribute('src', 'younggirl.png')
            } else {
                img.setAttribute('src', 'senhora.png')
            }
        }
    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}
