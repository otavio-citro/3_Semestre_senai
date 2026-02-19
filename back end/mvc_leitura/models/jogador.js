class Jogador {
    constructor(id, nome, pontuacao) {
        
        if (!nome || !pontuacao) {
            throw new Error("nome ou pontuacao sao obrigatorios");
            
        }
        this.id = id;
        this.nome = nome;
        this.pontuacao = Number(pontuacao = 0);
       
       

        
    }
    descricao(){
        return `${this.nome} -  ${this.pontuacao}`
    }

    verificarTamanho(){
        if (this.pontuacao <= 150) return 'iniciante';
        if (this.pontuacao <= 300) return 'intermediario';
        return 'avançado'
    }
    adicionarPontos(){
        this.pontuacao += 50;
    }
    
}

export default Jogador