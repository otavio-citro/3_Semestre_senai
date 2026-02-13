const pais = {
    "nome": "brasil",
    "capital": "brasilia",
    "população": 2110000000,
    "idioma": "portugues",
    "região": {
        "sudeste": "sao paulo / rio de janeiro / minas / es",
        "sul" : "pr rs sc",
        "norte": "am ac rr ro pa ap to"
        
    }
}

console.log(pais.capital);
console.log(pais.região.sul);

//let nome = pais.nome;

//let capital = pais.capital
//let população = pais.população

let {nome, capital, população, idioma} = pais