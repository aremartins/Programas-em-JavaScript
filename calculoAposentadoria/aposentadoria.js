function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let temp = document.getElementById('tempo')
    let res = document.getElementById('res')
    let fano = document.getElementById('txtano')

    if(fano.value.length == 0 || fano.value.length < 4) {
        window.alert('verifique os dados e tente novamente')
    } else {
        let sex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let tempo = Number(temp.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 65 || tempo > 20) {
                res.innerHTML = 'Já pode aposentar. '
                img.setAttribute('src', 'aposentou.jpg')
            } else if (idade < 65 || tempo < 20) {
                res.innerHTML = 'Ainda não pode aposentar. '
                img.setAttribute('src', 'naodeu.jpg')
            }
        }else if ( sex[1].checked){
            genero = 'Mulher'
            if (idade >= 62 || tempo > 15) {
                res.innerHTML = 'Já pode aposentar. '
                img.setAttribute('src', 'aposentoumulher.jpg')
            } else if (idade < 62 || tempo < 15) {
                res.innerHTML = 'Ainda não pode aposentar. '
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML += ` Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
     
        

    }
   
    


}