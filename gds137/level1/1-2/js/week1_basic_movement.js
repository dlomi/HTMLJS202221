//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var mainTimer = setInterval(animate, 1000/60);


	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	var ball = new Ball();
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	ball.x += 4;
	
	//Update the Screen
	ball.draw();
}
