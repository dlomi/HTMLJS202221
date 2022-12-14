var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d")
var timer = requestAnimationFrame(main);
var gameOver = true;
var gameState = []
var currentState = 0;


//score variables 
var score = 0;
var highScore = 0;

//game sprites
var shipSprite = new Image();
shipSprite.src = "images/ship.png";
shipSprite.onload = function(){
    main();
}
var asteroidSprite = new Image();
asteroidSprite.src = "images/asteroid.png";
asteroidSprite.onload = function(){
    main();
}
//start and end screen
var bg = new Image();
bg.src = "images/titlescreen.png";
bg.onload = function(){
    main();
}
var endScreen = new Image();
endScreen.src = "images/endscreen.png";
endScreen.onload = function(){
    main();
}

//ship variables
var ship = new PlayerShip();

function PlayerShip() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 30;
    this.height = 30;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;

    this.drawShip = function () {
        ctx.save();
        ctx.translate(this.x, this.y);
        //ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(0, -10);
        ctx.lineTo(10, 10);
        ctx.lineTo(-10, 10);
        ctx.lineTo(0, -10);
        ctx.closePath();
        ctx.fill();
        //ship sprite
        ctx.drawImage(shipSprite, -this.width/2, -this.height/2, this.width, this.height);
        ctx.restore();
    }

    this.moveShip = function () { 
        this.x += this.vx;
        this.y += this.vy;

        //add boundaries to the canvas

        //bottom boundary
        if (this.y > canvas.height - this.height / 2) {
            this.y = canvas.height - this.height / 2;
            this.vy = 0;
        }

        //top boundary
        if (this.y < this.height / 2) {
            this.y = this.height / 2;
            this.vy = 0;
        }
        //right boundary
        if (this.x > canvas.width - this.width / 2) {
            this.x = canvas.width - this.width / 2;
            this.vx = 0;
        }

        //left boundary
        if (this.x < this.width / 2) {
            this.x = this.width / 2;
            this.vx = 0;
        }
    }


}

document.addEventListener("keydown", pressKeyDown);
document.addEventListener("keyup", pressKeyUp);

function pressKeyDown(e) {
    if (!gameOver) {
        //wasd keys 
        if (e.keyCode == 87) {
            //ship goes up
            ship.up = true;
        }
        if (e.keyCode == 65) {
            //ship goes left
            ship.left = true;
        }
        if (e.keyCode == 68) {
            //ship goes right
            ship.right = true;
        }
        if (e.keyCode == 83) {
            //ship goes down
            ship.down = true;
        }

        //arrow keys
        if (e.keyCode == 38) {
            //ship goes up
            ship.up = true;
        }
        if (e.keyCode == 37) {
            //ship goes left
            ship.left = true;
        }
        if (e.keyCode == 39) {
            //ship goes right
            ship.right = true;
        }
        if (e.keyCode == 40) {
            //ship goes down
            ship.down = true;

        }
    }
    if (gameOver) {
        if (e.keyCode == 32) {
            if (currentState == 2) {
                //from the game over screen
                currentState = 0;
                numAsteroids = 20;
                asteroids = [];
                score = 0;
                gameStart();
                main();
            } else {
                //from the main menu
                gameStart();
                gameOver = false;
                currentState = 1;
                scoreTimer();
                main();
            }
        }
    }
}
function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            //ship goes up
            ship.up = false;
        }
        if (e.keyCode == 65) {
            //ship goes left
            ship.left = false;
        }
        if (e.keyCode == 68) {
            //ship goes right
            ship.right = false;
        }
        if (e.keyCode == 83) {
            //ship goes down
            ship.down = false;
        }

        //arrow keys
        if (e.keyCode == 38) {
            //ship goes up
            ship.up = false;
        }
        if (e.keyCode == 37) {
            //ship goes left
            ship.left = false;
        }
        if (e.keyCode == 39) {
            //ship goes right
            ship.right = false;
        }
        if (e.keyCode == 40) {
            //ship goes down
            ship.down = false;
        }
    }
}

//variables for asteroid creation
var numAsteroids = 20;
var asteroids = [];


//class for asteroid objects 
function Asteroid() {
    this.radius = randomRange(15, 2);
    this.x = randomRange(canvas.width - this.radius, this.radius);
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height;
    this.vy = randomRange(10, 5);
    //this.color = "white";

    this.drawAsteroid = function () {
        //commands to draw asteroids
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        //draw asteroid sprite
        ctx.drawImage(asteroidSprite, this.x-(this.radius),this.y-(this.radius), this.radius+ this.radius, this.radius+this.radius);
        ctx.restore();
    }
}

//for loop to create the first asteroids 

//utility functions
function gameStart() {
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid();

    }
//create new instance to player ship
    ship = new PlayerShip();
}

function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}

function detectCollision(distance, calcDistance) {
    return distance < calcDistance;

}

function scoreTimer() {
    if (!gameOver) {
        score++;
        if (score % 5 == 0) {
            numAsteroids += 10;
            console.log(numAsteroids);
        }
        setTimeout(scoreTimer, 1000)
    }
}



//asteroid game state machine 

//main menu
gameState[0] = function () {
    console.log("Main Menu");
    ctx.save();
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
    ctx.font = "50px VT323";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Asteroid Avoidance", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = "15px VT323";
    ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2 + 250)
    ctx.restore();
}

//game scene
gameState[1] = function () {
    ctx.save();
    ctx.font = "15px VT323";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore();

    //set up vertical movement 
    if (ship.up) {
        ship.vy = -10;
    } else {
        ship.vy = 3;
    }

    //horizontal movement 
    if (ship.left) {
        ship.vx = -5;
    } else if (ship.right) {
        ship.vx = 5;
    } else {
        ship.vx = 0;
    }


    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var distance = Math.sqrt((dX * dX) + (dY * dY));
        //collision detection is here 
        if (detectCollision(distance, (ship.height / 2 + asteroids[i].radius))) {
            //alert("Hit asteroid. Game Over");
            gameOver = true;
            currentState = 2
            main();
            //clears asteroids from game over menu
            return;
        }

        if (asteroids[i].y > canvas.height + asteroids[i].radius) {
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height;
        }
        //draw the asteroids
        asteroids[i].y += asteroids[i].vy;
        asteroids[i].drawAsteroid();

    }

    //draw ship
    ship.moveShip();
    ship.drawShip();

    //check to see if we need more asteroids 
    while (asteroids.length < numAsteroids) {
        //add and create new asteroids in the array
        asteroids.push(new Asteroid());
    }
}

//gameover menu
gameState[2] = function () {
    if(score > highScore){
        //new high score
        highScore = score;
        ctx.save();
        ctx.drawImage(endScreen,0,0,canvas.width,canvas.height);
        ctx.font = "30px VT323";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Game Over your score was: " + score.toString(), canvas.width / 2, canvas.height / 2 - 60);
        ctx.fillText("Your new high score is: " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 30);
        ctx.fillText("New Record", canvas.width / 2, canvas.height / 2);
        ctx.font = "15px VT323";
        ctx.fillText("Press Space to Play Again", canvas.width / 2, canvas.height / 2 + 20);
        ctx.restore();
    }else{
        //regular high score
        ctx.save();
        ctx.drawImage(endScreen,0,0,canvas.width,canvas.height);
        ctx.font = "30px VT323";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Game Over your score was: " + score.toString(), canvas.width / 2, canvas.height / 2 - 60);
        ctx.fillText("Your high score is: " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 30);
        ctx.font = "15px VT323";
        ctx.fillText("Press Space to Play Again", canvas.width / 2, canvas.height / 2 + 20);
        ctx.restore();
    }


}

function main() {
    //clears canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gameState[currentState]();

    if (!gameOver) {
        timer = requestAnimationFrame(main);
    }

}