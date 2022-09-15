function novaFila () {

    const filaDePedidos = ["pedido 10", "pedido 11", "pedido 12"]

    let ultimoPedido = filaDePedidos[filaDePedidos.length -1]

    let numeroDoUltimoPedido = parseInt (ultimoPedido[ultimoPedido.length-2] + ultimoPedido[ultimoPedido.length-1])

    
    let novoPedido = numeroDoUltimoPedido + 1
    
    for ( i = 0; i < filaDePedidos.length; i++ ) filaDePedidos[i] = filaDePedidos[i+1]
    
   filaDePedidos[filaDePedidos.length -1] = 'pedido ' + novoPedido 
    
    console.log(filaDePedidos)

}

novaFila()