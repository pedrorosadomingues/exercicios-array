function maiorDiferença() {

    const numeros = [8, 11, 4, 1]

    let maiorDiferença = 0

    let indiceMaior = 0

    let indiceMenor = 0

    for ( i = 0; i < numeros.length; i++ ) {

    if ( numeros[i] > numeros[indiceMaior]) indiceMaior = i

    if ( numeros[i] < numeros[indiceMenor]) indiceMenor = i
    }

    maiorDiferença = numeros[indiceMaior] - numeros[indiceMenor]

    console.log(maiorDiferença)

    
    
}
maiorDiferença()