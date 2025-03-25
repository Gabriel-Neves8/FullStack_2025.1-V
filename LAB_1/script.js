let num_rng = Math.random()*100
num_alvo = Math.floor(num_rng)
console.log(num_alvo)

function adv(){
    let num = parseInt(document.getElementById('num').value);
    if(num < num_alvo){
        document.getElementById('resp').innerHTML = "Numero menor que o desejado";
        document.getElementById("resp").style.setProperty("background-color", "red");
    }else
        if(num > num_alvo){
            document.getElementById('resp').innerHTML = "Numero maior que o desejado";
            document.getElementById("resp").style.setProperty("background-color", "red");
        
        }else{
            document.getElementById('resp').innerHTML = "Numero desejado";
            document.getElementById("resp").style.setProperty("background-color", "green");
        }
    

}