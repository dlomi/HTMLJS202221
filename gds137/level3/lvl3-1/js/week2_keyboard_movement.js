//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var playerTwo;

var p1Wins = 0;
var p2Wins = 0;


	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.x = 10;
	playerTwo = new GameObject();
	playerTwo.x = 1024;
	playerTwo.color = "red";
	
	player.height = 140;
	player.width = 19;
	playerTwo.height = 140;
	playerTwo.width = 30;
	
	ball.vx = 4;
	ball.vy = 0;

	ball.height = 50;
	ball.width = 50;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	ball.x += ball.vx;
	ball.y += ball.vy;
	context.save();
	context.strokeStyle = "blue";
	context.beginPath();
	context.moveTo(canvas.width/2, 1);
	context.lineTo(canvas.width/2, 800);
	context.closePath();
	context.lineWidth = 3;
	context.stroke();
	context.restore();

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

	if(upArrow)
	{
		playerTwo.y -= 4;
	}
	if(downArrow)
	{
		playerTwo.y += 4;
	}


	//prevents players from leaving the screen
	if(player.y < player.height/2)
	{
		player.y = player.height/2
	}
	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2
	}

	if(playerTwo.y < player.height/2)
	{
		playerTwo.y = playerTwo.height/2
	}
	if(playerTwo.y > canvas.height - playerTwo.height/2)
	{
		playerTwo.y = canvas.height - playerTwo.height/2
	}

	//left boundary of canvas
	if(ball.x < -ball.width/2)
	{
		ball.x = canvas.width/2
		ball.y = canvas.height/2
		console.log("p2 score +1");
		p2Wins++;
	}
	//right boundary of canvas
	if(ball.x > canvas.width + ball.width/2)
	{
		ball.x = canvas.width/2
		ball.y = canvas.height/2
		console.log("p1 score +1");
		p1Wins++;
		
	}
	//top boundary of canvas
	if(ball.y < ball.height/2)
	{
		ball.y = ball.height/2
		ball.vy = -ball.vy;
		ball.vy = 10;

	}
	//bottom boundary of canvas
	if (ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy;

	}

	if (player.hitTestObject(ball))
	{
		if(ball.y < player.y - 30)
		{
			ball.vx = 4;
			ball.vy = -4;
		}
		if(ball.y < player.y - 60)
		{
			ball.vx = -ball.vx;
		}
		if(ball.y < player.y - 150)
		{
			ball.vx = 4;
			ball.vy = -4;
		}
	}



	if(player.hitTestObject(ball))
	{
		ball.x = player.x + player.width/2 + ball.width/2
		ball.vx = 4;
		if(ball.y < player.y - player.height/6)
		{
			ball.vy = -4;
		}
		if(ball.y > player.y + player.height/6)
		{
			ball.vy = 4;
		}
	}
	if(playerTwo.hitTestObject(ball))
	{
		ball.x = playerTwo.x - playerTwo.width/2 - ball.width/2
		ball.vx = -4;
		if(ball.y < playerTwo.y - playerTwo.height/6)
		{
			ball.vy = -4;
		}
		if(ball.y > playerTwo.y + playerTwo.height/6)
		{
			ball.vy = 4;
		}
	}



	//Update the Screen

	player.drawRect();
	playerTwo.drawRect();
	ball.drawCircle();
	context.font = "20px Arial";
	context.textAlign = "center";
	context.fillText("Player 1  |  Player 2", 511, 30); 
	context.fillText(p1Wins + "-" + p2Wins, 511, 70);
}

