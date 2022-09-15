Fila do banco
Neste exercício iremos controlar a fila de um banco que tem um limite de pessoas que podem ficar do lado de dentro. Portanto , enquanto as pessoas do lado de fora e do lado de dentro ainda não tiverem atingido o limite permitido, deveremos permitir uma entrada.

Para isso, teremos dois arrays (um para controlar o fila do lado de dentro do banco e outro para controlar o fila do lado de fora) de strings onde cada elemento é o nome da pessoa que está na fila. Nossas matrizes são chamadas de filaDeDentro e filaDeFora .

O limite de elementos para filaDeDentro deve ser 5. Portanto, enquanto houver elementos na filaDeFora e os últimos espaços disponíveis dentro do limite de filaDeDentro , deveremos passar o primeiro elemento da filaDeFora para o primeiro elemento da filaDeDentro .

Ao final, imprima todos os elementos da filaDeDentro e em seguida imprima todos os elementos da filaDeFora

Exemplo:

espera que 3 pessoas na fila de dentro e 4 pessoas na fila de fora:

const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

// seu codigo aqui
Escreva o código que verificará a filaDeFora um elemento de cada vez, e se a filaDentro ainda não for possível o limite de posição máxima de 5 pessoas, a última posição da filaDeFora deve ser passada à primeira da filaDeFora o limite de último , até que complete de filaDeFora 5 pessoas.

No exemplo dado acima, o que deve ser impresso no console ao final do programa é:

[ 'Jose', 'Maria', 'Joao', 'Joana', 'Roberta' ]
[ 'Marcos', 'Felipe' ]