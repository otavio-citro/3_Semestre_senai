class pessoa{
    nome
    constructor(nome){
        this.nome = nome
    }

    apresentar(){
        return `${this.nome}`
    }
}

class pessoaFisica extends pessoa{
    constructor(nome,cpf){
        super(nome);
        this.cpf = cpf
    }
}
class pessoaJuritica extends pessoa{
    constructor(nome,cnpj){
        super(nome);
        this.cpf = cnpj
    }
}

const ana = new pessoaFisica('Ana', '123.456.789-00')

console.log(ana.apresentar());


const SESI = new pessoaJuritica('SESI - Andradina', '12.345.678/0001-90')
console.log(SESI.apresentar());



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

class grifinoria extends bruxo {
    constructor (nome, nivel_magia = 1){
        super(nome, nivel_magia)
        this.casa = 'Grifinoria'
    }
    feiticoAssinatura(){
        return `${this.nome} ${this.casa}`
    }
}
class sonserina extends bruxo {
    constructor (nome, nivel_magia = 1){
        super(nome, nivel_magia)
        this.casa = 'Sonserina'
    }
    feiticoAssinatura(){
        return `${this.nome} ${this.casa}`
    }
}


const harry = new grifinoria('harry' )
console.log(harry.feiticoAssinatura());
