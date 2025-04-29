let canvas1 = document.getElementById('canvas_1');
let ctx1 = canvas1.getContext('2d');
let canvas2 = document.getElementById('canvas_2');
let ctx2 = canvas2.getContext('2d');

function desenhar_quadrado(v, w, x, y, z, ){
    ctx1.beginPath();
    ctx1.lineWidth = 2;
    ctx1.fillStyle = v;
    ctx1.fillRect(w,x,y,z);
    ctx1.closePath();
}

function desenhar_linha(v, w, x, y, z){
    ctx1.beginPath();
    ctx1.lineWidth = 2;
    ctx1.strokeStyle = v;
    ctx1.moveTo(w, x);
    ctx1.lineTo(y, z);
    ctx1.stroke();
    ctx1.closePath();
}

function desenhar_arco(u, v, w, x, y, z){
    ctx1.beginPath();
    ctx1.lineWidth = 2;
    ctx1.strokeStyle = u;
    ctx1.arc(v, w, x, y*Math.PI,z*Math.PI);
    ctx1.stroke();
    ctx1.closePath();
}

function desenhar_circulo(t, u, v, w, x, y, z){
    ctx1.beginPath();
    ctx1.lineWidth = 2;
    ctx1.fillStyle = t
    ctx1.strokeStyle = u;
    ctx1.arc(v, w, x, y*Math.PI,z*Math.PI);
    ctx1.stroke();
    ctx1.fill()
    ctx1.closePath();
}

function escrever(x, y, z){
    ctx1.beginPath();
    ctx1.lineWidth = 1;
    ctx1.fillStyle = 'black';
    ctx1.font = "20px Arial"
    ctx1.textAlign = "center";
    ctx1.fillText(x,y,z);
    ctx1.closePath();  
}

function desenhar_quadrado2(v, w, x, y, z){
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle = v;
    ctx2.fillRect(w, x, y, z);
    ctx2.closePath();
}

function desenhar_linha2(v, w, x, y, z){
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = v;
    ctx2.moveTo(w, x);
    ctx2.lineTo(y, z);
    ctx2.stroke();
    ctx2.closePath();
}

function desenhar_arco2(u, v, w, x, y, z){
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = u;
    ctx2.arc(v, w, x, y*Math.PI, z*Math.PI);
    ctx2.stroke();
    ctx2.closePath();
}

function desenhar_circulo2(t, u, v, w, x, y, z){
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle = t;
    ctx2.strokeStyle = u;
    ctx2.arc(v, w, x, y*Math.PI, z*Math.PI);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();
}

function escrever2(x, y, z){
    ctx2.beginPath();
    ctx2.lineWidth = 1;
    ctx2.fillStyle = 'black';
    ctx2.font = "20px Arial";
    ctx2.textAlign = "center";
    ctx2.fillText(x, y, z);
    ctx2.closePath();  
}
escrever("Canvas", 150, 50)

desenhar_quadrado("blue", 0, 0, 50, 50)
desenhar_quadrado("red", 250, 0, 50, 50)
desenhar_quadrado("aqua", 0, 120, 30, 60)
desenhar_quadrado("aqua", 270, 135, 30, 30)
desenhar_quadrado("red", 105, 150, 45, 45)
desenhar_quadrado("yellow", 0, 240, 30, 60)
desenhar_quadrado("yellow", 30, 270, 30, 30)
desenhar_quadrado("black", 270, 240, 30, 60)
desenhar_quadrado("black", 240, 270, 30, 30)

desenhar_linha("green", 0, 150, 300, 150)
desenhar_linha("blue", 0, 0, 150, 150)
desenhar_linha("red", 300, 0, 150, 150)
desenhar_linha("black", 150, 150, 150, 300)

desenhar_arco("green", 150, 150, 60, 1, 0)
desenhar_arco("green", 150, 150, 80, 1, 1.25)
desenhar_arco("green", 150, 150, 80, 1.75, 2)
desenhar_arco("green", 150, 300, 60, 1.5, 2)
desenhar_arco("green", 150, 300, 80, 1, 1.5)

desenhar_circulo("aqua", "green", 150, 300, 40, 1, 2)
desenhar_circulo("yellow", "green", 70, 225, 15, 1, 3)
desenhar_circulo("yellow", "green", 220, 225, 15, 1, 3)
desenhar_circulo("aqua", "blue", 150, 115, 15, 1, 3)

desenhar_circulo2("yellow", "yellow", 225, 80, 40, 1.5, 3.5)

desenhar_quadrado2("gray", 0, 225, 300, 75)
desenhar_quadrado2('#81491f', 95, 150, 90, 75)
desenhar_quadrado2('#61bbfb', 145,170,25,25)
desenhar_quadrado2('#61bbfb', 105,170,25,25)
desenhar_quadrado2('#5f4525', 130,195,15,30)


ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#ec6e52';
ctx2.moveTo(95,150);
ctx2.lineTo(185,150);
ctx2.lineTo(140,110);
ctx2.fill();
ctx2.closePath();

desenhar_quadrado2('#81491f', 40, 175, 20, 50)
desenhar_circulo2('#3b892a', '#3b892a', 50,170,20,1.5,3.5)

desenhar_quadrado2('#81491f', 255, 210, 20, 50)
desenhar_circulo2('#3b892a', '#3b892a', 265,200,20,1.5,3.5)

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#598cfa';
ctx2.moveTo(0,225);
ctx2.lineTo(40,225);
ctx2.lineTo(40,275);
ctx2.lineTo(100,275);
ctx2.lineTo(100,300);
ctx2.lineTo(0,300);
ctx2.fill();
ctx2.closePath();

desenhar_circulo2('#598cfa','#598cfa', 0, 225, 40, 1.5,3.5)
desenhar_circulo2('#598cfa', '#598cfa', 100, 300, 25, 1.5,3.5)
