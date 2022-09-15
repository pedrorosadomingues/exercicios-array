function encontrarLivro (livro) {

    let livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia']

    let posição = 0

    let texto = 'O livro está na posição '

    for ( i = 0; i < livros.length; i ++ )
    if ( livro === livros[i]) {

        posição = i + 1


}
console.log(texto + posição)

    
}
encontrarLivro('Dom Quixote')
