//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var health;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject();
	player.color = "#ff00ff";
	player.y = 700;
	player.x = 100;
	player.height = 100;
	player.width = 100;
	player.vx = 4;
	player.vy = 0;

	platform0 = new GameObject();
		platform0.width = canvas.width;
		platform0.height = 300;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";

	platform1 = new GameObject();
		platform1.width = 100;
	
		platform1.x = 400;
		platform1.y = 450;
		platform1.color = "#33ff66";

	/*platform2 = new GameObject();
		platform2.width = 200;
		platform2.x = canvas.width-60;
		platform2.y = 300;
		platform2.color = "#66ff33";*/
		
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
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
	}
/*	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
*/


	
	
	platform0.drawRect();
	platform1.drawRect();
//	platform2.drawRect();

	//Show hit points
	player.drawCircle();

	//goal.drawCircle();
}
