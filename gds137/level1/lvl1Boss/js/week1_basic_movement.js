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

	ball.vx = 4;
	ball.vy = 4;
	
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	ball.x += ball.vx;
	ball.y += ball.vy;
	
	if(ball.x < ball.width/2)
	{
		ball.x = ball.width/2
		ball.vx = -ball.vx;
		ball.vx = 4;
	}
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;

	}
	if(ball.y < ball.height/2)
	{
		ball.y = ball.height/2
		ball.vy = -ball.vy;
		ball.vy = 15;

	}
	if (ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy;

	}
	
	//Update the Screen
	ball.draw();
}
