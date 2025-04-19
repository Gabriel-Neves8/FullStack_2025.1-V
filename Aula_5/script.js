// window.alert("hello world!")
console.log("hello world!");

//let nome = prompt("Quak o seu nome?");
//console.log(nome);

console.log("while");
let i = 0
while(i < 10){
    console.log(i);
    //i++;
    // i = i + 1;
    i += 1;
}

console.log("for");
for(let i=0; i < 10; i++){
    console.log(i)
}

console.log("numeros impares")
for(let i=1; i < 100; i+= 2){
    console.log(i)
}

console.log("numeros multiplos de 5")
for(let i=5; i <= 500; i+= 5){
    console.log(i)
}

let numero = prompt("Digite um número")

console.log("numeros do digitado até o zero")
for(numero; numero >= 0; numero--){
    console.log(numero)}

console.log("Exrecício 4")
let num = parseInt(prompt("Digite um número inteiro"))
if(num < 0){
    console.log("Número invalido")
}

let mult = 1;
for(let i = num; i > 0; i--){
    mult *= 1;
    console.log(i,mult)
}