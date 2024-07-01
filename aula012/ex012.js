var agora = new Date // Para pegar a hora atual do sistema
var hora = agora.getHours()
console.log(`Agora são exatemnete ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if(hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite!')
}
