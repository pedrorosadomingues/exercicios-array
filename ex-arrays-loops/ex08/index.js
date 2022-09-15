function maiorNumero() {

    const numeros = [500,200,3, 4,500, 1, 8, 11, 7, 5,400]

    let indiceMaior = 0


    for ( i = 0; i < numeros.length; i++ ){

    if ( numeros[i] > numeros[indiceMaior]) indiceMaior = i
    }
    console.log(numeros[indiceMaior])
}

maiorNumero()