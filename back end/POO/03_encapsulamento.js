class Pessoa{
    //atributo privado
    #documento

    //atibuto publico
    nome;
    idade;

    constructor(nome,idade,documento){
        this.nome = nome;
        this.idade = idade;
         this.#documento = documento;
    }

    apresentar(){
        return `${this.nome}, ${this.idade}`
    }
    
    mostrarDocumento(){
        return `${this.#documento}`
    }
}

const pessoa1 = new Pessoa('silvia',28,'12345678900')

console.log(pessoa1.apresentar());
console.log(pessoa1.mostrarDocumento());



class bruxo {
    #nivelEnergia = 100

    nome;
    idade;
    feitico;
    casa
    nivel_magia

    constructor(nome, idade, feitico, casa, nivel_magia, nivelEnergia){
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivel_magia = nivel_magia;
        this.#nivelEnergia = nivelEnergia
    }

    verEnergia(){
        return this.#nivelEnergia
    }

    recarregarEnergia(){
       return this.#nivelEnergia += 10
    }

    lancarFeitico(){
       return this.#nivelEnergia -= 10
    }

}

const bruxo1 = new bruxo('harry',16,"leviosa",'grifinoria',1,100)

console.log(bruxo1.verEnergia());
console.log(bruxo1.lancarFeitico());
console.log(bruxo1.recarregarEnergia());
