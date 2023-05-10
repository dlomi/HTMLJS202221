//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var gravity = 1;
var friction = 0.85;
var vx = 0;

var score = 0;


	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.color = "#00ffff";
	player.force = 2;
	player.y = 550;
	player.height = 40;
	player.width = 250;
	
	ball.vx = 5;
	ball.vy=0;
	ball.force = 2;
	ball.height = 70;
	ball.width = 70;
	ball.color = "#ff00ff";



	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(a)
	{
		//player.x -= 4;
		player.vx += player.ax * -player.force;
	}
	if(d)
	{
		//player.x += 4;
		player.vx += player.ax * player.force;
	}

	ball.vy += gravity;
	ball.x += ball.vx;
	ball.y += ball.vy;

	player.vx *= friction;
	player.x += player.vx;

	//prevents players from leaving the screen
	if(player.x < player.width/2)
	{
		player.x = player.width/2
	}
	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2
	}



	//left boundary of canvas
	if(ball.x < ball.width/2)
	{
		ball.x = ball.width/2
		ball.vx = -ball.vx;
			
	}
	//right boundary of canvas
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx;
		ball.x = canvas.width - ball.width/2
	}
	//top boundary of canvas
	if(ball.y < ball.width/2)
	{
		ball.y = ball.width/2
		ball.vy = -ball.vy;
	
	}
	//bottom boundary of canvas
	if (ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy * .67
		score = 0;
	}

	if (player.x < 0 + player.width/2)
	{
		player.x = player.width/2;
	}
	if (player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2;
	}

	if(player.hitTestObject(ball))
	{
		ball.y = player.y - player.height/2 - ball.height/2
		ball.vy = -35;
		score++;
		if(ball.x < player.x - player.width/6)
		{
			ball.vx =-ball.force
		}
		if(ball.x > player.x + player.width/6)
		{
			ball.vx = ball.force
		}
		if(ball.x > player.x + player.width/3)
		{
			ball.vx = ball.force * 5
		}
		if(ball.x < player.x - player.width/3)
		{
			ball.vx = -ball.force * 5
		}
	}




	//Update the Screen

	player.drawRect();

	ball.drawCircle();

	context.font = "16px Arial";
	context.textAlign = "left";
	context.color = "#555555";
	context.fillText("Score: " + score, 80, 25); 

	context.save();
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(ball.x, ball.y);
	context.lineTo(player.x, player.y);
	context.closePath();
	context.lineWidth = 1;
	context.stroke();
	context.restore();

}

