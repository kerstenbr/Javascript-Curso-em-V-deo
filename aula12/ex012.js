var agora = new Date()
var hora = agora.getHours()
//console.log(`Agora são ${hora} horas.`)

if (hora < 12){
    console.log(`Agora são ${hora} da manhã. Bom dia pica fina`)
} else if (hora <= 18){
    console.log(`Agora são ${hora} da tarde. Boa tarde pica fina`)
} else if (hora <= 23){
    console.log(`Agora são ${hora} da noite. Boa noite pica fina`)
}