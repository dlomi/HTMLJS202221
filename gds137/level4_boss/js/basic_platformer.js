//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject();
	player.color = "#ff00ff";
	player.y = 700;
	player.x = 50;
	player.height = 50;
	player.width = 50;
	player.vx = 4;
	player.vy = 0;

	platform0 = new GameObject();
		platform0.width = canvas.width - 300;
		platform0.height = 300;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";

	platform1 = new GameObject();
		platform1.width = 100;
	
		platform1.x = 200;
		platform1.y = 450;
		platform1.color = "#33ff66";

	platform2 = new GameObject();
		platform2.width = 100;
		platform2.height = 200;
		platform2.x = 400;
		platform2.y = 400;
		platform2.color = "#33ff66";

	platform3 = new GameObject();
		platform3.width = canvas.width - 100;
		platform3.height = 300;
		platform3.x = 1300;
		platform3.y = canvas.height - platform3.height/2;
		platform3.color = "#66ff33";
		
	healthBar = new GameObject();
		healthBar.width = 500;
		healthBar.height = 20;
		healthBar.x = 500;
		healthBar.y = 30;
		healthBar.color = "#ff0000";
		



	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	healthBar.width -= 10 && healthBar.width >=0;
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
		player.color = "#ff00ff";
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;

	}
	
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
		
	}
	
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true; 

	}
	while(platform1.hitTestPoint(player.right()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.color = "red";
		healthBar.width -= 10 && healthBar.width >=0;
	}
	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;

		
	}

	while(platform2.hitTestPoint(player.right()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.color = "red";
		healthBar.width -= 10 && healthBar.width >=0;
	
	}


	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
		player.color = "#ff00ff";
	}

	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();


	//Show hit points



	if(player.x > canvas.width - player.width/2) //right boundary
	{
		/*healthBar.width -= healthBar.width;
		context.font = "100px Arial";
		context.textAlign = "center";
		context.fillText("Game Over", canvas.width/2, canvas.height/2); */
		//context.clearRect(0,0, canvas.width, canvas.height);
		platform0.drawRect();
		platform1.drawRect();
		platform2.drawRect();
		platform3.drawRect();
		player.x = 100;


	} 
	if(player.y > canvas.height - player.height/2) //bottom boundary
	{
		healthBar.width -= 10;
		player.y = platform3.y - player.height/2;

	}
	while(healthBar.width <= 1) 
	{
		context.clearRect(0,0, canvas.width, canvas.height)
		player.color = "#ff0000";
		player.drawRect();
		player.vx = 0;

		context.font = "50px Arial";
		context.textAlign = "center";
		context.fillText("Game Over", canvas.width/2, canvas.height/2); 
		//context.fillText("You weren't there, you're a square", canvas.width/2, 600);
	}
	healthBar.drawRect();
	player.drawCircle();
	//goal.drawCircle();
	
}
