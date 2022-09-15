Exercício 01
Tabuada
Crie uma função que atende dois argumentos (um número e uma função callback). A função deve montar uma tabuada de multiplicação, como o exemplo abaixo, ao número passado no argumento da função principal. O resultado da tabuada deve ser passado para uma função de retorno de chamada.

Exemplo
tabuada(5, (resultado) => {
    console.log(resultado)
})
Para a chamada da função acima, deve imprimir:

5 x 0 = 0
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
Faça o teste com outros exemplos.