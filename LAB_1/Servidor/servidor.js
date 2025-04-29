var http = require('http');
var express = require('express');
let bodyParser = require("body-parser")
var colors = require("colors");
colors.enable();
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://tazeradi:gs38671@cluster0.xiki1yr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("Cluster0");
var usuarios = dbo.collection("usuarios");


var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);
console.log("servidor rodando...")

app.get("/inicio", function(requisicao, resposta){
    resposta.redirect("Home.html")
})
app.post("/inicio", function(requisicao, resposta){
    resposta.redirect("Home.html")
})

app.get("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.query.nome;
    let login = requisicao.query.login;
    let senha = requisicao.query.senha;
    let nasc = requisicao.query.nascimento;

    console.log(nome, login, senha, nasc)

})

app.post("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nascimento;

    var data = { db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc };

    usuarios.insertOne(data, function(err){
        console.log(err)
        if(err){
            resposta.render("resposta",{status: "Erro", nome, login, senha, nasc});
        }else{
            resposta.render("resposta",{status: "Sucesso", nome, login, senha, nasc});
        }
    })

    console.log(nome, login, senha, nasc);
    
})




app.get("/for_ejs",function(requisicao, resposta){
    let valor = requisicao.query.valor;
    resposta.render("exemplo_for",{valor});
})

app.post('/logar', function(requisicao, resposta){
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    console.log(login, senha);

    var data = {db_login: login, db_senha: senha}

    usuarios.find(data).toArray(function(err, items){
        console.log(items)
        if(items.length == 0){
            resposta.render("resposta_login",{status: "Usuario/Senha nao encontrados"})
        }else if(err){
            resposta.render("resposta_login",{status: "Erro ao logar"})
        }else{
            resposta.render("resposta_login",{status: "Usuario "+login+" logado"})
        }
    })
})