function contandoLetras() {

    let quantidade = 0

    const letras = ["A", "e", "B", "C", "E", "z"]

    //const letras = ["A", "a", "B", "C", "L", "z"]

    for ( i = 0; i < letras.length; i++ )

    if ( letras[i] === 'E' || letras[i] === 'e') quantidade++
     
    if ( quantidade === 0) console.log ('Nenhuma letra "E" ou "e" foi encontrada.') 
    
    else console.log('Foram encontradas ' + quantidade + ' letras "E" ou "e".')

   


}
contandoLetras()