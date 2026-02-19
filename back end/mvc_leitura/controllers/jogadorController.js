import jogador from "../models/jogador.js";

//vetor de objeto de jogador

let listajogador = [
    new jogador(1, "algusto", "Machado de Assis", 95),
    new jogador(2, "marcelo", "Machado de Assis", 288),
    new jogador(3, "harry potter", "J.K. Rowling", 300),
]

const JogadorController = {
listar: (req, res) => {
    res.render('jogador.ejs', {jogadores: listajogador})
},
adicionar: (req,res) => {
    const {nome, pontuacao,} = req.body;

    try {
        //contrução de um novo objeto, utilizando a classe jogador
        const novojogador = new jogador(
            listajogador.length + 1,
            nome,
            Number(pontuacao),
            

        )
        console.log(novojogador);
        
        listajogador.push(novojogador);
        res.redirect('/jogador')
    } catch (e) {
        res.status(400).render('jogador.ejs', {lista: listajogador, erro: e.message})
    }

},
//Confirmando a leitura
adicionarPonto: (req, res) =>{
    const {id} = req.body;
    const jogador = listajogador.find(l => l.id === Number(id))
    jogador.adicionarPontos();
    res.redirect('/jogador')
}

}



export default JogadorController