let canvas = document.getElementById('canvas_1');
let ctx = canvas.getContext('2d');


let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'imagens/ball.jpg';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,400,400)
    bola.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove',function(evento){
    if (!mouseDentro) return;
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    bola.x = x_mouse - 50;
    bola.y = y_mouse - 50;
})

canvas.addEventListener('mouseenter', function() {
    mouseDentro = true;
});

canvas.addEventListener('mouseleave', function() {
    mouseDentro = false;
});