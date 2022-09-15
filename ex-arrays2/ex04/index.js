function some () {
    
    let palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

    let u= 0

    for ( i = 0; i < palavras.length; i++) {
    if ( palavras[i] !== 'cerveja' & palavras[i] !== 'vodka') u++
 }
 if ( u === palavras.length) console.log('tudo certo, vamos as compras!')
 else console.log('revise sua lista, joão. possui bebida com venda proibida!')



}
some()