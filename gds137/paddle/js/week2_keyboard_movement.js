//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var gravity = 1;

var score = 0;


	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.x = canvas.width/2;
	player.color = "#00ffff";
	player.y = 550;
	player.height = 40;
	player.width = 250;

	
	ball.vx = 5;
	ball.vy += gravity;


	ball.height = 70;
	ball.width = 70;
	ball.color = "#ff00ff";



	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	context.save();
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(canvas.width/2, 300);
	context.lineTo(canvas.width/2, 550);
	context.closePath();
	context.lineWidth = 1;
	context.stroke();
	context.restore();

	ball.x += ball.vx;
	ball.y += ball.vy;



	if(a)
	{
		player.x -= 4;
	}
	if(d)
	{
		player.x += 4;
	}


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
	if(ball.x < -ball.width/2)
	{
		ball.x = ball.width/2
		ball.vx = -ball.vx;
			
	}
	//right boundary of canvas
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx;

	}
	//top boundary of canvas
	if(ball.y < ball.height/2)
	{
		ball.y = ball.height/2
		ball.vy = -ball.vy;
	
	}
	//bottom boundary of canvas
	if (ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		//ball.vy = -vy*.67;
		score = 0;
	
	}

	/*if (player.hitTestObject(ball))
	{
		if(ball.y < player.x - 30)
		{
			ball.vx = 4;
			ball.vy = -4;
		}
		if(ball.y < player.x - 60)
		{
			ball.vx = -ball.vx;
		}
		if(ball.y < player.x - 150)
		{
			ball.vx = 4;
			ball.vy = -4;
		}
	}*/



	if(player.hitTestObject(ball))
	{
		ball.x = player.x + player.width/2 + ball.width/2
		ball.vx = 4;
		score++;
		if(ball.y < player.y - player.height/6)
		{
			ball.vy = -4;
		}
		if(ball.y > player.y + player.height/6)
		{
			ball.vy = 4;
		}
	}




	//Update the Screen

	player.drawRect();

	ball.drawCircle();

	context.font = "16px Arial";
	context.textAlign = "left";
	context.color = "#555555";
	context.fillText("Score: " + score, 80, 25); 

}

