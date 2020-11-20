function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length < 4 || Number(fano.value) > ano) {
        window.alert("Verifique os dados e tente novamente")
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = "Homem"
            if(idade > 0 && idade < 12){
                img.setAttribute('src', 'menino.png')
            }
            else if(idade > 12 && idade < 60){
                img.setAttribute('src', 'youngman.png')
            }else{
                img.setAttribute('src','senhor.png')
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if(idade > 0 && idade < 12){
                img.setAttribute('src', 'menina.png')
            }
            else if(idade > 12 && idade < 60){
                img.setAttribute('src', 'younggirl.png')
            }else{
                img.setAttribute('src','senhora.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos `
        res.appendChild(img)
    }
    
} 