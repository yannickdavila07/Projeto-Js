// LIMPEZA

const email = "               email@email.com      ";
// trim - remove os espaços inicio e fim 
const emailLimpo = email.trim();
console.log(emailLimpo)

// VALIDACAO
if(emailLimpo.includes("@")){
    console.log("Email válido!")
}else{
    console.log("Email, inválido!")
}


//TRANSFORMACAO DE TEXTO

const tituloArtigo = "Como aprender JAVA RAIZ";
// upper(maiusculo) e low(minusculo)
const texto1 = tituloArtigo.toUpperCase();
console.log(texto1)

// split- transforma o texto em array
const texto2 = tituloArtigo.split(" ")
console.log(texto2)

// join - junta todo o texto
const texto3 = texto2.join("-");
console.log(texto3)

// metodo toFixad

const precoProduto = 199.99;
const desconto = 0.15 //15%
const precoFinal = precoProduto * (1 - desconto)

console.log(precoFinal);

// `` - template strings - concatenação
console.log(`R$ ${precoFinal.toFixed(2)}`) 


// DOM (DOCUMENT OBJECT MODEL)
const titulo = document.getElementById('titulo');

titulo.innerText = "O DOM Mudou o Texto";

titulo.style.color = "blue"