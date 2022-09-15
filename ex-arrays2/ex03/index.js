function validador () {

    let palavras = ["livro", "canet", "sol", "carro", "orelh"]

    let quantidade = 0


    for ( i =0; i < palavras.length; i++)
    {
    if ( palavras[i].length <= 5) quantidade++
}
    if ( quantidade === palavras.length) {console.log('array validado')
}else console.log('existe palavra inválida')



}


validador()