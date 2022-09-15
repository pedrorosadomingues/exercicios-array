const tabuada  =  (numero,callback)=>{
    for ( let i = 0 ; i < 11; i++){
        callback(`${numero} X ${i} = ${numero*i}`)
    }
}
tabuada(5,(r)=>{
   console.log(r)
})


