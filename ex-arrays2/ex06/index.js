function cidades () {
    
    let cidades = ["Salvador","São Paulo","Brasilia","Recife","Rio de Janeiro"] //,'Bahia', 'Minas Gerais', 'Morro de São Paulo','Jardim Botânico','ulala']

    let novaString = ''

    let novoArray = []

    let quantidadeDePalavras = 0

    for ( i = 0; i < cidades.length; i++ )

    if ( cidades[i].length <= 8) {
        novoArray.push(cidades[i])
    }

    for ( i = 0; i < novoArray.length; i++ ) {
    quantidadeDePalavras++
    if ( quantidadeDePalavras < novoArray.length) novaString += novoArray[i] + ', '
    else novaString += novoArray[i]
}
   

    console.log(novaString)
}
cidades()