class antiHeroi {
    #poder;

    nome;
    idade;

    constructor(nome, idade, poder){
        this.nome = nome
        this.idade = idade;
        this.#poder = poder
    }

    apresentar(){
        return `nome: ${this.nome} idade: ${this.idade}`
    }
    
    mostrarPoder(){
        return this.#poder
    }

}

class DC extends antiHeroi {
    constructor(nome, poder, traje){
        super(nome, poder)
        this.traje = traje = 'fibra de carbono'
    }
    apresentar(){
        return `seu nome de anti heroi é ${this.nome} e seu traje é feito de ${this.traje} `
    }

}
class Marvel extends antiHeroi {
    constructor(nome, roupa){
        super(nome)
        this.roupa = roupa = 'vibranium'
    }
    apresentar(){
        return `seu nome de anti heroi é ${this.nome} e seu traje é feito de ${this.roupa} `
    }

}

const flash = new DC ('flash')
console.log(flash.apresentar());

const panteraNegra = new Marvel ('PanteraNegra')
console.log(panteraNegra.apresentar());

const deadpool = new antiHeroi ('deadpool', 72)
console.log(deadpool.apresentar());

