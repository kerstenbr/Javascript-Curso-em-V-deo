var idade = 18
console.log(`Você tem ${idade} anos.`)
    if (idade < 16 ){
        console.log('Não Vota')
    } else if (idade >= 16 && idade <18 || idade > 65){ // A idade é maior ou igual a 16 E menor que 18 OU idade maior que 65?
        console.log('Voto opcional') // Se TRUE pra qualquer uma das de cima, faça isso.
    } else{
        console.log('Voto obrigatorio')
    }