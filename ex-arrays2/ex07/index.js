function buscaDeCep (cepInformado) {

    const endereços = [
        { cep: 00111222, rua: "Rua dos Artistas" },
        { cep: 00111333, rua: "Rua Augusta" },
        { cep: 00222444, rua: "Avenida Paralela" },
        { cep: 11222333, rua: "Rua Carlos Gomes" },
    ]

    for ( i = 0; i < endereços.length; i++ )
    if ( endereços[i].cep === cepInformado) console.log(endereços[i].rua)
    
}
buscaDeCep(00111222)