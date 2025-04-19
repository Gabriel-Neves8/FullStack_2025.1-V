let canvas1 = document.getElementById('canvas_1');
let ctx1 = canvas1.getContext('2d');
let canvas2 = document.getElementById('canvas_2');
let ctx2 = canvas2.getContext('2d');
let canvas3 = document.getElementById('canvas_3');
let ctx3 = canvas3.getContext('2d');
let canvas4 = document.getElementById('canvas_4');
let ctx4 = canvas4.getContext('2d');
let canvas5 = document.getElementById('canvas_5');
let ctx5 = canvas5.getContext('2d');
let canvas6 = document.getElementById('canvas_6');
let ctx6 = canvas6.getContext('2d');

// retângulos
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'blue';
ctx1.strokeStyle = 'red';
ctx1.strokeRect(70,70,50,50);
ctx1.fillRect(0,0,70,70);
ctx1.closePath();

// linhas
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'red';
ctx2.moveTo(200,150);
ctx2.lineTo(120,120);
ctx2.lineTo(60,250);
ctx2.lineTo(200,250);
ctx2.lineTo(200,150);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

// arcos
ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'blue';
ctx3.strokeStyle = 'red';
ctx3.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
ctx3.fill();
ctx3.stroke();
ctx3.closePath();

// texto
ctx4.beginPath();
ctx4.lineWidth = 10;
ctx4.fillStyle = 'blue';
ctx4.strokeStyle = 'red';
ctx4.font = "90px Arial"
ctx4.textAlign = "center";
ctx4.strokeText("Olá",200,350)
ctx4.fillText("Olá",195,350);
ctx4.closePath();

ctx5.beginPath();
ctx5.lineWidth = 2;
ctx5.fillStyle = 'red';
ctx5.strokeStyle = 'red';
ctx5.strokeRect(0,0,50,50);
ctx5.fillRect(0,0,50,50);
ctx5.closePath();

ctx5.beginPath();
ctx5.lineWidth = 2;
ctx5.fillStyle = 'blue';
ctx5.strokeStyle = 'blue';
ctx5.fillRect(350,0,50,50);
ctx5.strokeRect(350,0,50,50);
ctx5.closePath();

ctx5.beginPath();
ctx5.lineWidth = 2;
ctx5.fillStyle = 'yellow';
ctx5.strokeStyle = 'yellow';
ctx5.fillRect(0,350,50,50);
ctx5.strokeRect(0,350,50,50);
ctx5.closePath();

ctx5.beginPath();
ctx5.lineWidth = 2;
ctx5.fillStyle = 'green';
ctx5.strokeStyle = 'green';
ctx5.fillRect(350,350,50,50);
ctx5.strokeRect(350,350,50,50);
ctx5.closePath();

ctx5.beginPath();
ctx5.lineWidth = 2;
ctx5.fillStyle = 'red';
ctx5.strokeStyle = 'red';
ctx5.moveTo(0,0);
ctx5.lineTo(400,400);
ctx5.stroke();
ctx5.closePath();

ctx5.beginPath();
ctx5.lineWidth = 2;
ctx5.fillStyle = 'blue';
ctx5.strokeStyle = 'blue';
ctx5.moveTo(400,0);
ctx5.lineTo(0,400);
ctx5.stroke();
ctx5.closePath();

ctx5.beginPath();
ctx5.lineWidth = 2;
ctx5.fillStyle = 'green';
ctx5.strokeStyle = 'green';
ctx5.moveTo(0,200);
ctx5.lineTo(400,200);
ctx5.stroke();
ctx5.closePath();

ctx5.beginPath();
ctx5.lineWidth = 2;
ctx5.fillStyle = 'yellow';
ctx5.strokeStyle = 'green';
ctx5.arc(200,200,70,2*Math.PI,3*Math.PI);
ctx5.stroke();
ctx5.closePath();

ctx5.beginPath();
ctx5.lineWidth = 2;
ctx5.fillStyle = 'yellow';
ctx5.strokeStyle = 'green';
ctx5.arc(70,120,20,2*Math.PI,4*Math.PI);
ctx5.stroke();
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.lineWidth = 2;
ctx5.fillStyle = 'yellow';
ctx5.strokeStyle = 'green';
ctx5.arc(330,120,20,2*Math.PI,4*Math.PI);
ctx5.stroke();
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.lineWidth = 10;
ctx5.fillStyle = 'black';
ctx5.strokeStyle = 'black';
ctx5.font = "24px Arial"
ctx5.textAlign = "center";
ctx5.fillText("Desenvolvimento Web",200,80);
ctx5.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = 'yellow';
ctx6.strokeStyle = 'yellow';
ctx6.arc(300,100,50,1.5*Math.PI,3.5*Math.PI);
ctx6.fill();
ctx6.stroke();
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = 'gray';
ctx6.strokeStyle = 'gray';
ctx6.fillRect(0,300,400,100);
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = '#81491f';
ctx6.strokeStyle = '#81491f';
ctx6.fillRect(125,200,100,100);
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = '#61bbfb';
ctx6.strokeStyle = '#61bbfb';
ctx6.fillRect(135,220,30,30);
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = '#61bbfb';
ctx6.strokeStyle = '#61bbfb';
ctx6.fillRect(185,220,30,30);
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = '#5f4525';
ctx6.strokeStyle = '#5f4525';
ctx6.fillRect(165,250,20,50);
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = '#ec6e52';
ctx6.strokeStyle = 'red';
ctx6.moveTo(125,200);
ctx6.lineTo(225,200);
ctx6.lineTo(175,150);
ctx6.lineTo(125,200);
ctx6.fill();
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = '#81491f';
ctx6.strokeStyle = '#81491f';
ctx6.fillRect(50,250,20,50);
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = '#3b892a';
ctx6.strokeStyle = '#3b892a';
ctx6.arc(60,230,30,1.5*Math.PI,3.5*Math.PI);
ctx6.fill();
ctx6.stroke();
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = '#81491f';
ctx6.strokeStyle = '#81491f';
ctx6.fillRect(350,300,20,50);
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = '#3b892a';
ctx6.strokeStyle = '#3b892a';
ctx6.arc(360,280,30,1.5*Math.PI,3.5*Math.PI);
ctx6.fill();
ctx6.stroke();
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = '#598cfa';
ctx6.strokeStyle = 'red';
ctx6.moveTo(0,300);
ctx6.lineTo(50,300);
ctx6.lineTo(50,350);
ctx6.lineTo(125,350);
ctx6.lineTo(125,400);
ctx6.lineTo(0,400);
ctx6.fill();
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = '#598cfa';
ctx6.strokeStyle = '#598cfa';
ctx6.arc(0,300,50,1.5*Math.PI,3.5*Math.PI);
ctx6.fill();
ctx6.stroke();
ctx6.closePath();

ctx6.beginPath();
ctx6.lineWidth = 2;
ctx6.fillStyle = '#598cfa';
ctx6.strokeStyle = '#598cfa';
ctx6.arc(125,400,50,1.5*Math.PI,3.5*Math.PI);
ctx6.fill();
ctx6.stroke();
ctx6.closePath();
