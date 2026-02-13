const idade = 11;
 
if(idade >= 18){
    console.log("voce é um adulto");
    
}else if (idade <= 17 && idade >= 12){
    console.log("adolescente");
    
} else if (idade < 12) {
    console.log("criança");
    
}

//opertador ternario 

let tema = 'dark'
let corFundo
//condição       se verdadeira     senao
tema == "dark" ? corFundo = "preto" : corFundo = "branco"