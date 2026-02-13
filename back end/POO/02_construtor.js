class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('xlaudia', 25)
console.log(pessoa1);
const pessoa2 = new Pessoa('barreto', 30)
console.log(pessoa2);


class bruxo {
    constructor(nome, idade, feitico, casa, nivel_magia){
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivel_magia = nivel_magia;
    }
}

const bruxo1 = new bruxo('harry', 16, "leviosa", 'grifinoria', 1)
console.log(bruxo1);
