function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora = >= 0 && hora < 12) { // if = Se Hora for maior ou igual a zero e menor que meio dia
        //Bom Dia!
        img.src = 'manha'
    } else if (hora >= 12 && hora <= 18) {   // else if Se não se for maior ou igual a meio dia e menor que dezoito.
        //Boa Tarde
        img.src = 'tarde'
    } else {    // else Se não 
        //Boa Noite!
        img.src = 'noite'
    }
}
