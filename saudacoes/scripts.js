function carregar() {
    var msg = document.getElementById('msg');
    var img =document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours()    
    msg.innerHTML = `Agora são ${hora} horas.`
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


