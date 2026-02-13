class Livro {
    constructor(id, nome, pontuacao, nivel) {
        
        if (!nome || !pontuacao) {
            throw new Error("nome ou pontuacao sao obrigatorios");
            
        }
        this.id = id;
        this.nome = nome;
        this.pontuacao = pontuacao;
        this.nivel = nivel;
       

        
    }
    descricao(){
        return `${this.nome - this.pontuacao}`
    }

    verificarTamanho(){
        if (this.nivel >= 150) return 'nivel medio';
        if (this.nivel >= 300) return 'nivel alto';
        return 'nivel baixo'
    }
    
}

export default Livro