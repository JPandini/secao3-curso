//----------AULA 1----------
// setInterval

//function acao() {
//    document.write('Escrevendo... <br/>')
//}
//setInterval(acao, 1000) //dois parametros (função e tempo em ms)
//------------------

/* setInterval (()=>{ //função anonima (arrow =>)
    document.write('Escrevendo... <br/>');
},1000) */

//setTimeout
/* 
function acao() {
    document.write('Escrevendo... <br/>')
}


setTimeout(acao, 3000) //dois parametros (função e tempo em ms) // executa somente uma vez */


//-----------------------

//OBJETOS

/* let pessoa = {
    nome: 'João',
    idade: 17,
    altura: 1.72,
    cargo: 'Estudante do curso FullStack'
};
console.log(pessoa)
//pessoa.nome = acessar o nome :)
 */

/* let usuarios = [
    {nome: "João", idade: 17, cargo:"Desenvolvedor"},
    {nome: "Nicolas", idade: 18, cargo:"FullStack"},
    {nome:"Felipe", idade:20, cargo:"CEDETEC"}
]
console.log(usuarios); */


//------------------------
//Template String
/* let nome = "João";
let sobrenome = "Pandini";
let idade = 17;

let mensagem = `Meu nome é ${nome} ${sobrenome}, minha idade é ${idade} anos`;

console.log(mensagem); */

//--------------
//descontruindo um objeto


/* let pessoa = {
    nome: "João",
    idade: 17,
    cargo: "Programador",
    empresa: "Useall"
};
 */
/* let nome = "Pedrinho"

const { nome:NomePessoa, idade, cargo, empresa } = pessoa;
console.log(NomePessoa, idade);
console.log(pessoa); */

//-------------------------
//descontruindo um ARRAY
//let nomes = ["1- João", "2- Lucas", "3- Pedro"];
//const { 0:nome1, 1:nome2, 2:nome3 } = nomes;

//console.log(nome1);
//console.log(nome2); 
//let [nome1, nome2, nome3] = nomes;
//console.log(nome1);



//----------------Spread operator --> ...

/* let num1 = [1,2,3];
let num2 = [...num1,4,5,6];
console.log(num2); */

/* let pessoa = {
    nome: "João",
    idade: 17,
    cargo: "Programador",
    empresa: "AgroSys",
}

let novaPessoa = {
    ...pessoa,
    status: "ATIVO",
    cidade: "Içara - sc"
}
console.log(novaPessoa);  */


/* function novoUsuario(info){
    let dados = {
        ...info,
        nome: "João",
        cidade: "Içara",
        Estado: "SC"
    }
    
console.log(dados);
};

novoUsuario({ cargo:"Programador", status: "Ativo" })
 */


//------------REST OPERATOR
/* function convidados (...nomes){ //sem os "..." mostra somente o primeiro parametro 
    console.log(nomes);
}

convidados("João", "Larissa", "Nicolas"); */


/* function gerador(...numeros){
    console.log(numeros)
    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log(`O nomero gerado foi: ${numeros[numeroGerado]}`);
}
gerador (1, 2, 4, 66, 65, 24, 12, 33); */



//---------------
///MAP -> percorrrer todo um array 
/* let lista = ["Matheus", "José", "Maria"];
lista.map((item, index) =>{
    console.log(`Passando: ${item} - esta na posição: ${index}`)
}) */

//REDUCE - busca reduzir um array

/* let numeros = [5,3,2,5];

let total = numeros.reduce((acumulador, numero, indice, original)=>{
console.log(`${acumulador} - total até o momento`);
console.log(`${numero} - valor atual`);
//console.log(`${indice} - indice atual`);
//console.log(`${original} - array original`);
console.log("===========================")
return acumulador += numero
})

console.log(`Total do reduce: ${total}`) */




//=============AULA23========================
//FIND devolve somente o primeiro que encontrar
/* let listagem = [5,3, "José", 2, "Matheus"]
let busca = listagem.find((item)=>{
    if(item === "José"){
        console.log("Tem o José!!")
    }
}) */

//FILTER devolve todos que encontrar
/* let palavras = ["Matheus","Ricardo", "José","João"];

let resultado = palavras.filter((item)=>{
    return item.length <= 4;
})
console.log(resultado)
 */

//==========AULA24==============
//Funções anonimas
function somar (a, b){
    let total = a + b
    console.log(total)
}
somar(10, 30);

let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2;
    console.log(total);
}
subtrair(30, 20) 