var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
console.log(diaSem)
switch(diaSem){
    case diaSem = 0:
        console.log('Domingo')
        break
    case diaSem = 1:
        console.log('Segunda')
        break
    case diaSem = 2:
        console.log('Terça')
        break
    case diaSem = 3:
        console.log('Quarta')
        break
    case diaSem = 4:
        console.log('Quinta')
        break
    case diaSem = 5:
        console.log('Sexta')
        break
    case diaSem = 6:
        console.log('Sábado')
        break
    default:
        console.log('Erro: Não conseguir pegar o dia!')
}
