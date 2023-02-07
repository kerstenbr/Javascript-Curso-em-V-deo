//Isso aqui é uma gambiarra
//TODO: Realmente dar refresh na div em vez de fazer essa coisa porca
function carregar(){
    setInterval(carregar_teste)
}

//A Função em si
function carregar_teste(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    //Outras 2 gambiarras
    //TODO: Melhorar isso e fazer as coisas de um modo descente
    if (min < 10){
        min = '0' + min
    }
    
    if (sec < 10){
        sec = '0' + sec
    }
    
   
    if (hora >= 0 && hora < 12){
        // BOM DIA
        msg.innerHTML = `Agora são ${hora}:${min}:${sec} da manhã`
        img.src = 'img/manha.jpg'
        document.body.style.background = 'rgb(245, 149, 66)'
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE
        msg.innerHTML = `Agora são ${hora}:${min}:${sec} da tarde`
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'rgb(240, 87, 67)'
    } else {
        // BOA NOITE
        msg.innerHTML = `Agora são ${hora}:${min}:${sec} da noite` 
        img.src = 'img/noite.jpg'
        document.body.style.background = 'rgb(46, 44, 69)'
    }
    
}

