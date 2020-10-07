function carregar() {
    var msg = document.getElementById('msg');
    var img =document.getElementById('imagem');
    var data = new Date();   
    var dia = data.getDate()
    var hora = data.getHours()
    var minutes = data.getMinutes()
    var diaSem = data.getDay()  
    var mes = data.getMonth()
    var ano = data.getFullYear()
    var data = dia + '/' + (mes+1) + '/' + ano
    switch (diaSem) {
        case 0:
            diaSem = "Domingo"
            break
        case 1:
            diaSem  = "Segunda-feira"
            break
        case 2:
            diaSem = "Terça-feira"
            break
        case 3:
            diaSem = "Quarta-feira"
            break
        case 4:
            diaSem = "Quinta-feira"
            break
        case 5: 
            diaSem = "Sexta-feira"
            break
        case 6:
            diaSem = "Sábado"
            break

    }
    msg.innerHTML = `<p>Hoje é dia ${data}, ${diaSem}.</p><p> Agora são ${hora} horas e ${minutes} minutos.</p>` 
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += " Bom Dia!"
        img.src='manha.png'    
        document.body.style.background = '#FFD700'
    } else if ( hora > 12 && hora <= 18) {
        msg.innerHTML += " Boa tarde!"
        img.src='tarde.png'
        document.body.style.background = '#8DB6CD'
    } else {
        msg.innerHTML += " Boa noite!"
        img.src='noite.png'
        document.body.style.background = '#515154'
    }

}


