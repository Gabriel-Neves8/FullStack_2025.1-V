let p1 = document.getElementById('p1').innerHTML;
console.log(p1);
document.getElementById('p1').innerHTML= "Olá Mundo!";

// Exemplo 1
//let nome = prompt("Qual é o seu nome?");
//let idade = prompt("Qual é a sua idade?");
//let ano_atual = 2025;
//let ano_nascimento = ano_atual - idade;
//let resposta = 
//"Olá " + nome + ", seu ano de nascimento é " + ano_nascimento + "!";
//document.getElementById('ex1').innerHTML = resposta;

//Exemplo de Função
function imprimeMensagem(msg){
    console.log(msg);
}

imprimeMensagem("mensagem 1");
imprimeMensagem("mensagem 2");
imprimeMensagem("mensagem 3");

//Exemplo de Função soma
function soma(n1, n2){
    return  n1 + n2;
}
//Exemplo de Função mult
function mult(a, b){
    return a * b
}
let c = soma(3, 4);
console.log("A soma de "+ 3 + " e " + 4 +" é igual a " + c);


function ex2(){
    let num = parseInt(document.getElementById("ex2_in").value);
    console.log("Incrementos até " + num)
    for(let i = 0; i <= num; i++){
    console.log(i);
    }
}

function exe3(){
    let num1 = parseInt(document.getElementById('ex3_1').value);
    let num2 = parseInt(document.getElementById('ex3_2').value);
    let result = soma(num1,num2);
    console.log(result);
    document.getElementById('ex3_resp').innerHTML =
    "A soma de " + num1 + " e " + num2 + " é " + result;
    
}

function ex4(){
    let num1 = parseInt(document.getElementById('ex4_1').value);
    let num2 = parseInt(document.getElementById('ex4_2').value);

    let result = 0;
    if(num1 < 0 || num2 < 0){
        result = soma(num1,num2);
    }else{
        result = mult(num1,num2);

    }
    console.log(result);
    document.getElementById('ex4_resp').innerHTML =
    "O resultado é " + result;
    
}
