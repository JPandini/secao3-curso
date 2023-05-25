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


function novoUsuario(info){
    let dados = {
        ...info,
        nome: "João",
        cidade: "Içara",
        Estado: "SC"
    }
    
console.log(dados);
};

novoUsuario({ cargo:"Programador", status: "Ativo" })

