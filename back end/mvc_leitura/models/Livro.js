class Livro {
    constructor(id,titulo, autor, paginas) {
        if (!titulo || !autor) {
            throw new Error("titulo ou autor sao obrigatorios");

        }
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;


    }
    descricao() {
        return `${this.titulo} - ${this.autor}`
    }

    verificarTamanho() {
        if (this.paginas <= 150) return 'Leitura curta';
        if (this.paginas <= 300) return 'Leitura media';
        return 'leitura longa'
    }
    marcarComoLido() {
        this.lido = true;
    }
}

export default Livro