function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
   
    if (hora >= 0 && hora < 12){
        // BOM DIA
        msg.innerHTML = `Agora são ${hora}:${min} da manhã`
        img.src = 'img/manha.jpg'
        document.body.style.background = 'rgb(245, 149, 66)'
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE
        msg.innerHTML = `Agora são ${hora}:${min} da tarde`
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'rgb(240, 87, 67)'
    } else {
        // BOA NOITE
        msg.innerHTML = `Agora são ${hora}:${min} da noite` 
        img.src = 'img/noite.jpg'
        document.body.style.background = 'rgb(46, 44, 69)'
    }
}

