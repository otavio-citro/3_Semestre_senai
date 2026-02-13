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
    apresentar(){
        return `ola ${this.nome}, meu CPF: ${this.cpf}`
    }
}
class pessoaJuritica extends pessoa{
    constructor(nome,cnpj){
        super(nome);
        this.cnpj = cnpj
    }
    apresentar(){
        return `ola ${this.nome}, meu Cnpj: ${this.cnpj}`
    }
}

const ana = new pessoaFisica('Ana', '123.456.789-00')

console.log(ana.apresentar());


const SESI = new pessoaJuritica('SESI - Andradina', '12.345.678/0001-90')
console.log(SESI.apresentar());

const joao = new pessoa('joao')
console.log(joao.apresentar());

