import Livro from "../models/livro.js";

//vetor de objeto de livros

let listaLivro = [
    new Livro(1, "O Alienista", "Machado de Assis", 95),
    new Livro(2, "Dom Casmurro", "Machado de Assis", 288),
    new Livro(3, "harry potter e a pedra filosofal", "J.K. Rowling", 300),
]

const livroController = {
listar: (req, res) => {
    res.render('livros.ejs', {livros: listaLivro})
},
adicionar: (req,res) => {
    const {titulo, autor, paginas } = req.body;

    try {
        //contrução de um novo objeto, utilizando a classe livro
        const novoLivro = new Livro(
            listaLivro.length + 1,
            titulo,
            autor,
            Number(paginas)

        )
        console.log(novoLivro);
        
        listaLivro.push(novoLivro);
        res.redirect('/livros')
    } catch (e) {
        res.status(400).render('livros.ejs', {lista: listaLivro, erro: e.message})
    }

},
//Confirmando a leitura
marcarComoLido: (req, res) =>{
    const {id} = req.body;
    const livro = listaLivro.find(l => l.id === Number(id))
    livro.marcarComoLido();
    res.redirect('/livros')
}

}



export default livroController;