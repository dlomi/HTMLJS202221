//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	var ball = new GameObject();

	ball.vx = 4;
	ball.vy = 4;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	ball.x += ball.vx;
	ball.y += ball.vy;

	if(w)
	{
		console.log("Moving Up");
		player.y -= 4;
	}
	if(s)
	{
		console.log("Moving Down");
		player.y += 4;
	}

	if(player.y < player.height/2)
	{
		player.y = player.height/2
	}
	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2
	}
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
		ball.vy = 10;

	}
	if (ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy;

	}

	
	//Update the Screen
	player.drawRect();
	ball.drawCircle();
}

