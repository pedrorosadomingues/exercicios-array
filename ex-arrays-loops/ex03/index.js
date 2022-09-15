function verificar () {

    //const numeros = [54, 22, 14, 87, 284]

    let indice = 0

    const numeros = [54, 22, 14, 10, 284]

    for ( i = 0; i < numeros.length; i++ )

    if ( numeros[i] === 10) indice = i
    if ( indice === 0 ) console.log('-1')

    else console.log(indice)
}
verificar()