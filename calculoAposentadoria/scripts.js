function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    var fano = document.getElementById('txtano')
    var tempoc = document.getElementById('tempo')
    
    
    if (fano.value.length < 4 || fano.value > ano) {
        window.alert("Verifique os dados e tente novamente!")
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var tempo = Number(tempoc.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = "Homem"            
            if (idade >= 65  || tempo > 20){
                res.innerHTML = `<p> ${genero} com ${idade} anos, contribuição ${tempo}. Você já pode se aposentar</p>`
            } else if( idade < 65 ) {
                res.innerHTML = `<p> ${genero} com ${idade} anos. Você ainda não pode se aposentar</p>`
            }
          
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 62 || tempo > 15){
                res.innerHTML = `<p> ${genero} com ${idade} anos. Você já pode se aposentar</p>`
            } else {
                res.innerHTML = `<p> ${genero} com ${idade} anos. Você ainda não pode se aposentar</p>`
            
        
            res.style.textAlign = 'center'
            res.innerHTML =+ `Detectamos ${genero} com ${idade} anos`
            //res.appendChild(img)
            }
        }
    }

}