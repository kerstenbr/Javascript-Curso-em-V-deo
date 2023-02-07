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

        if (fSex[0].checked){
            genero = 'Homem'
        } else if (fSex[1].checked){
            genero = 'Mulher'
        }
        //res.style.textAlign = 'center' //Usar isso para o texto ficar centralizado, nesse caso ja vou fazer isso com css
        res.innerHTML = `${genero} com ${idade} anos`
    }
    

}