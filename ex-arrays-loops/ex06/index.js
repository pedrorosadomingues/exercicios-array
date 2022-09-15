function nomes() {

    const nomes = ["Ana", "Joana", "Carlos", "amanda"]

    let indiceMenor = 0

    let novoArray = []

    for ( i = 0; i < nomes.length; i++ )

    if ( nomes[i][indiceMenor] === 'A' || nomes[i][indiceMenor] === 'a') novoArray.push(nomes[i])

        console.log(novoArray)

}

nomes()