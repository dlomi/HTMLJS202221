var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//rectangle
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.lineWidth = "5";

ctx.fillRect(85,302,100,100);
ctx.strokeRect(85,302,100,100);

//circle
ctx.beginPath();
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "5";


ctx.arc(385,441,65,0, (2 * Math.PI), false);
ctx.closePath();
ctx.fill();
ctx.stroke();

//line
ctx.beginPath()
ctx.strokeStyle = "rgb(255,0,0)";
ctx.lineWidth = "5"
ctx.moveTo(85,680);
ctx.lineTo(280,550);
ctx.stroke();

//pentagon

ctx.beginPath();
ctx.fillStyle = "#ff00ff";
ctx.strokeStyle = "#00ffff";
ctx.lineWidth = "5";

ctx.moveTo(560,310);
ctx.lineTo(670,280);
ctx.lineTo(722,380);
ctx.lineTo(651,463);
ctx.lineTo(550,420);
ctx.closePath();
ctx.stroke();
ctx.fill();

//star
ctx.beginPath();
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "rgb(32,32,32)";
ctx.lineWidth = "5";

ctx.moveTo(635,500);
ctx.lineTo(670,550);
ctx.lineTo(730,569);
ctx.lineTo(690,610);
ctx.lineTo(695,680);
ctx.lineTo(636,650);
ctx.lineTo(575,680);
ctx.lineTo(585,620);
ctx.lineTo(540,570);
ctx.lineTo(600,550);
ctx.closePath();
ctx.stroke();
ctx.fill();