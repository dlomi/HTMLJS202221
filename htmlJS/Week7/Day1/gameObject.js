var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);
var speed = 2;
var gravity = 1;

var coin = new Image();
coin.src = "images/quarter.png"

coin.onload = function(){
    main();
}

//ctx.fillStyle = "green";
//ctx.fillRect(350,250,100,100);
//ctx.fillRect(500,250,100,100);

//utlity function
function randomRange(high,low){
    return Math.random()*(high - low) + low;
}

function GameObject(){
    //examples of properties inside our class
    this.width = randomRange(100,10);
    this.height = this.width;
    this.radius = randomRange(50,5);
    this.x = randomRange(canvas.width-this.width, 0);
    this.y = randomRange(canvas.height-this.height, 0);
    this.vx = randomRange(speed,-speed);
    this.vy = randomRange(speed,-speed);
  
    this.color = `rgb(${randomRange(255,0)},${randomRange(255,0)},${randomRange(255,0)})`;


    //examples of methods in a class
    this.drawSquare = function(){
        //all the procedures to draw a square go here
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }


    this.drawCircle = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        ctx.closePath();
        ctx.fill();
        //console.log(this.x,this.y,this.radius,0,Math.PI * 2);


    }
    this.drawImage = function(){
        ctx.drawImage(coin, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;

        //check for top of canvas 
        if(this.y < this.radius){
            this.y = this.radius
            this.vy = this.vy *= -1;
        }
        if(this.y > canvas.height - this.radius){
            this.y = canvas.height - this.radius;
            this.vy *= -1;
        }
        //check for left side of canvas
        if(this.x < this.radius){
            this.x = this.radius;
            this.vx *= -1;
        }
        //check for right side of canvas
        if(this.x > canvas.width - this.radius){
            this.x = canvas.width - this.radius;
            this.vx *= -1; 
        }
    }
}

var square = new GameObject();
//square.color = "yellow";
//square.y = 50;
square.drawCircle();

var square2 = new GameObject();
//square2.color = "purple";
square2.drawCircle();

var circle = new GameObject();
circle.drawCircle();

var numberOfObjects = 100;

var circles = [];

for(var i = 0; i<numberOfObjects; i++){
    circles[i] = new GameObject()
    //console.log(circles[i].x, circles[i].y, circles[i].radius, circles[i].color);
}
function main(){
    //clear
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //update
    // square.move();
    // square2.move();
    // circle.move();
    //draw
    //square.drawCircle();
    //square2.drawCircle();
    //circle.drawCircle();

    for(var i = 0; i<circles.length; i++){
        //move
        circles[i].move();
        //circles[i].
        circles[i].drawCircle();
       // console.log(circles[i].x, circles[i].y, circles[i].radius, circles[i].color);
       circles[i].drawImage();

    }
    
    timer = requestAnimationFrame(main);
}

main();

