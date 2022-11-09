var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.lineWidth = "5";

ctx.fillRect(80,180,100,100)

//rectangle
ctx.beginPath();
ctx.fillStyle = "ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "2";

//circle
ctx.arc(380,430,60,0, (0 * Math.PI), false);
//fix above numbers later
ctx.lineTo(400,300);
ctx.closePath();
ctx.fillStyle();
ctx.stroke();

ctx.beginPath()
ctx.moveTo()
//line