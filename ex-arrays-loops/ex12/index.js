function filaDoBanco() {

    const filaDeDentro = ["Jose", "Maria", "Joao"];

    const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"]


    for (i = 0; filaDeDentro.length < 5 & filaDeFora.length > 0; i++ ) { 
        filaDeDentro.push(filaDeFora[i])
        filaDeFora.shift()
    }
    
    console.log(filaDeDentro)
    console.log(filaDeFora)

}
filaDoBanco()