function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    //console.log(fAno)
    //a letra 'e' é permitada pq em matematica e = exponenciação, mas só colocar o e vai pro erro 400 ali, sem problema por enquanto. Mas da pra fazer conta com ele ainda.
    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        alert('[ERRO] 400 Bad Request')
    }else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fSex[0].checked){
            genero = 'Homem'
            if (idade <= 15){
                //criança
                img.setAttribute('src', 'img/homem crianca.jpg')
                document.body.style.background = 'rgb(74, 107, 144)'
            }else if (idade <= 59){
                //adulto
                img.setAttribute('src', 'img/homem adulto.jpg')
                document.body.style.background = 'rgb(54, 50, 139)'
            }else if (idade <= 105){
                //velho
                img.setAttribute('src', 'img/homem velho.jpg')
                document.body.style.background = 'rgb(27, 23, 91)'
            }else{
                //darklord
                img.setAttribute('src', 'img/demon king.jpg')
                document.body.style.background = 'rgb(18, 17, 18)'
                
            }
        } else if (fSex[1].checked){
            genero = 'Mulher'
            if (idade <= 15){
                //criança
                img.setAttribute('src', 'img/mulher crianca.jpg')
                document.body.style.background = 'rgb(165, 82, 195)'
            }else if (idade <= 59){
                //adulto
                img.setAttribute('src', 'img/mulher adulta.jpg')
                document.body.style.background = 'rgb(160, 61, 236)'
            }else if (idade <= 105){
                //velho
                img.setAttribute('src', 'img/mulher velha.jpg')
                document.body.style.background = 'rgb(86, 23, 134)'
            }else{
                //darklord
                img.setAttribute('src', 'img/demon king.jpg')
                document.body.style.background = 'rgb(18, 17, 18)'
                
            }
            
        }
        //res.style.textAlign = 'center' //Usar isso para o texto ficar centralizado, nesse caso ja vou fazer isso com css
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
    }
    

}