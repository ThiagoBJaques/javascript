function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    

    msg.innerHTML = `Agora são ${hora}:${minu} minutos.`
    if (hora >= 0 && hora < 12) { // if = Se Hora for maior ou igual a zero e menor que meio dia
        //Bom Dia!
        img.src = './imagens/manha.jpg'
        document.body.style.background = '#4A5928'

    } else if (hora >= 12 && hora <= 18) {   // else if Se não se for maior ou igual a meio dia e menor que dezoito.
        //Boa Tarde
        img.src = './imagens/tarde.jpg'
        document.body.style.background = '#8C4820'

    } else {    // else Se não 
        //Boa Noite!
        img.src = './imagens/noite.jpg'
        document.body.style.background = '#012340'
    }
}