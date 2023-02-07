function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    //console.log(fAno)

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        alert('ERRO AAAA')
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
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade}`
    }
    

}