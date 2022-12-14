//canvas stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");


//create instances for images RPS
var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();

var wins = 0;
var cpuWins = 0;
var health = 3;
var healthBarWidth = 200;

rock.src = "images/rock.png";
paper.src = "images/paper.png";
scissors.src = "images/scissors.png";
hrock.src = "images/rock2.png";
hpaper.src = "images/paper2.png";
hscissors.src = "images/scissors2.png";

var result = "Select a button from above to choose."

hscissors.onload = function(){
    ctx.fillStyle = "white";
    ctx.font = "30px Arial"
    ctx.fillText("Welcome to Pokemon RPS!", 225,canvas.height/2 - 50);
    ctx.fillText("Press Space to play",350,canvas.height/2, + 155);
}

/*hscissors.onload = function(){
    draw(rock, paper, scissors, rock, paper, scissors);
}*/

document.addEventListener("keydown", keyPressDown);
document.addEventListener("keyup", keyPressUp);

var gameOver = true;

function keyPressDown(e){
    console.log(e.keyCode);
}

function keyPressUp(e){
    console.log(e.keyCode);
    if(e.keyCode == 32){
        gameOver = false;
        draw(rock, paper, scissors, rock, paper, scissors);
    }
}

function draw(rock,paper,scissors, crock, cpaper, cscissors){
    if(gameOver == true){
        ctx.clearRect(0,0,canvas.width, canvas.height)
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.fillText("Welcome Press Space to Play", canvas.width/2,100);
        return;
    }
}
function draw(rock,paper,scissors,crock,cpaper,cscissors){
    //clear canvas
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText("Player Choices", canvas.width/2,100);
    ctx.drawImage(rock, canvas.width/2 - rock.width/2 - 100, 15);
    ctx.drawImage(paper, canvas.width/2 - paper.width/2, 15);
    ctx.drawImage(scissors, canvas.width/2 - scissors.width/2 + 100, 15);

    ctx.fillText("Computer Choices", canvas.width/2, 325);
    ctx.drawImage(crock, canvas.width/2 - rock.width/2 - 100, 375);
    ctx.drawImage(cpaper, canvas.width/2 - paper.width/2, 375);
    ctx.drawImage(cscissors, canvas.width/2 - scissors.width/2 + 100, 375);

    ctx.fillText(result, canvas.width/2, 525);
}


//document.fonts.load = function () {
    // ctx.font = "40px Arial";
    // ctx.fillStyle = "purple";
    // ctx.strokeStyle = "yellow"
    // ctx.fillText("Welcome to RPS Game!", 200, 280);
    // ctx.strokeText("Welcome to RPS Game!", 200, 280);
    //console.log("loaded");
//} 



//alert("Hello this is the alert");
//Array datatype
//var rps = ["rock", "paper", "scissors"];
//var rps = new Array();
var rps = [];
rps[0] = "Rock";
rps[1] = "Paper";
rps[2] = "Scissors";


document.getElementById("rock").addEventListener("click", function (e) {
    //alert("You Clicked " + rps[0]);
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener("click", function (e) {
    //alert("You Clicked " + rps[1]);
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener("click", function (e) {
    //alert("You Clicked " + rps[2])
    playGame(rps[2]);
});

function playGame(playerChoice) {
    if(gameOver == true){
        return;
    }
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "Rock":
            if (cpuChoice == 0) {
                //its a tie
                //alert("CPU chose Rock. It's a tie!");
                result = "CPU chose Charmander. It's a tie!";
                draw(hrock, paper, scissors, hrock, paper, scissors);
                ctx.fillText("Your Wins: " + wins,95,40)
                ctx.fillText("CPU Wins: " + cpuWins,95,70)
                drawHealthBar();
                winCheck();
                healthCheck();
            }
            else if (cpuChoice == 1) {
                //alert("CPU chose Paper. CPU wins!");
                result = "CPU chose Bulbasaur. CPU wins!";
                draw(hrock, paper, scissors, rock, hpaper, scissors);
                cpuWins++;
                ctx.fillText("Your Wins: " + wins,95,40)
                ctx.fillText("CPU Wins: " + cpuWins,95,70)
                health--;
                drawHealthBar();
                winCheck();
                healthCheck();
            }
            else {
                //alert("CPU chose Scissors. You win!");
                result = "CPU chose Squirtle. You win!";
                draw(hrock, paper, scissors, rock, paper, hscissors);
                wins++;
                ctx.fillText("Your Wins: " + wins,95,40)
                ctx.fillText("CPU Wins: " + cpuWins,95,70)
                drawHealthBar();
                winCheck();
                healthCheck();
            }
            break;
        case "Paper":
            if (cpuChoice == 0) {
                //its a tie
                //alert("CPU chose Rock. You win!");
                result = "CPU chose Charmander. You win!";
                draw(rock, hpaper, scissors, hrock, paper, scissors);
                wins++;
                ctx.fillText("Your Wins: " + wins,95,40)
                ctx.fillText("CPU Wins: " + cpuWins,95,70)
                drawHealthBar();
                winCheck();
                healthCheck();
                
            }
            else if (cpuChoice == 1) {
                //alert("CPU chose Paper. It's a tie!");
                result = "CPU chose Bulbasaur. It's a tie!";
                draw(rock, hpaper, scissors, rock, hpaper, scissors);
                ctx.fillText("Your Wins: " + wins,95,40)
                ctx.fillText("CPU Wins: " + cpuWins,95,70)
                drawHealthBar();
                winCheck();
                healthCheck();

            }
            else {
                //alert("CPU chose Scissors. CPU wins!");
                result = "CPU chose Squirtle. CPU wins!";
                draw(rock, hpaper, scissors, rock, paper, hscissors);
                cpuWins++;
                ctx.fillText("Your Wins: " + wins,95,40)
                ctx.fillText("CPU Wins: " + cpuWins,95,70)
                health--;
                drawHealthBar();
                winCheck();
                healthCheck();
            }
            break;
        case "Scissors":
            if (cpuChoice == 0) {
                //its a tie
                //alert("CPU chose Rock. CPU wins!");
                result = "CPU chose Charmander. CPU wins!";
                draw(rock, paper, hscissors, hrock, paper, scissors);
                cpuWins++;
                ctx.fillText("Your Wins: ", wins,95,40)
                ctx.fillText("CPU Wins: " + cpuWins,95,70)
                health--;
                drawHealthBar();
                winCheck();
                healthCheck();
            }
            else if (cpuChoice == 1) {
                //alert("CPU chose Paper. You win!");
                result = "CPU chose Bulbasaur. You win!";
                draw(rock, paper, hscissors, rock, hpaper, scissors);
                wins++;
                ctx.fillText("Your Wins: " + wins,95,40)
                ctx.fillText("CPU Wins: " + cpuWins, 95,70)
                drawHealthBar();
                winCheck();
                healthCheck();
            }
            else {
                //alert("CPU chose Scissors. It's a tie!");
                result = "CPU chose Squirtle. It's a tie!";
                draw(rock, paper, hscissors, rock, paper, hscissors);
                ctx.fillText("Your Wins: " + wins,95,40)
                ctx.fillText("CPU Wins: " + cpuWins,95,70)
                drawHealthBar();
                winCheck();
                healthCheck();
            }
            break;
    }


}
function healthCheck(){
    if(health == 0){
        gameOver = true;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawHealthBar();
        ctx.font="30px Arial";
        ctx.fillText("Your Wins: " + wins,95,40)
        ctx.fillText("CPU Wins " + cpuWins,95,70)
        ctx.font = "60px Arial"
        ctx.fillText("Game Over",canvas.width/2,canvas.height/2 + 50)
    }
}
function winCheck(){
    if(wins = 3){
        gameOver = true;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.font = "30px Arial";
        ctx.fillText("Your Wins: " + wins,95,40)
        ctx.fillText("CPU Wins: " + cpuWins,95,70)
        ctx.font = "60px Arial"
        ctx.fillText("You Win!",canvas.width/2,canvas.height/2)
        ctx.fillText("Press Space to Play Again",canvas.width/2,canvas.height/2 + 50)
        drawHealthBar();
    }
}
function drawHealthBar(){
    var currentBarWidth = healthBarWidth * (health);
    ctx.fillStyle = "white";
    ctx.fillRect(250,30,600,10);
    ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    ctx.fillText("Health",525,25);
    if(health>=0){
        ctx.fillStyle = "red"
        ctx.fillRect(250,30,currentBarWidth,10);
    }
}