var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var charmander = new Image ();
var bulbasaur = new Image ();
var squirtle = new Image ();
var hcharmander = new Image ();
var hbulbasaur = new Image ();
var hsquirtle = new Image ();


charmander.src = "images/charmander.png";
bulbasaur.src = "images/bulbasaur.png";
squirtle.src = "images/squirtle.png";
hcharmander.src = "images/charmander2.png";
hbulbasaur.src = "images/bulbasaur2.png";
hsquirtle.src = "images/squirtle2.png";


var result = "Select a button from above to choose."

hcharmander.onload = function(){
    draw(charmander,bulbasaur,squirtle,charmander,bulbasaur,squirtle);
}
hbulbasaur.onload = function(){
    draw(charmander,bulbasaur,squirtle,charmander,bulbasaur,squirtle);
}
hsquirtle.onload = function(){
    draw(charmander,bulbasaur,squirtle,charmander,bulbasaur,squirtle);
}

document.addEventListener("keydown", keyPressDown);
document.addEventListener("keyup", keyPressUp);

var gameOver = true;

function keyPressDown(e){
    console.log(e.keyCode);
}
function keyPressUp(e){
    console.log(e.keycode);
    if(e.keycode == 32){
        gameOver = false;
        draw(charmander,bulbasaur,squirtle,charmander,bulbasaur,squirtle);
    }
}

function pressSpace(e){
    if(e.keyCode == 32 && gameOver){
        gameOver = false;
    }
    if(health <= 0){
        restartGame()
    }
}
function main(){
    ctx.clearRect(0,0,canvas.width, canvas.height);

}
function draw (charmander, bulbasaur, squirtle, hcharmander, hbulbasaur, hsquirtle){
    if(gameOver == true){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "white";
        ctx.fillText ("Press Space to Play",canvas.width/2,100);
        return;
    }
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText ("Player Choices", canvas.width/2,100);
    ctx.drawImage(charmander, canvas.width/2 - charmander.width/2 - 100, 150);
    ctx.drawImage(bulbasaur, canvas.width/2 - bulbasaur.width/2, 150);
    ctx.drawImage(squirtle, canvas.width/2 - squirtle.width/2 + 100, 150);

    ctx.fillText ("Computer Choices", canvas.width/2,325)
    ctx.drawImage(charmander, canvas.width/2 - rock.width/2 - 100, 375);
    ctx.drawImage(bulbasaur, canvas.width/2 - paper.width/2, 375);
    ctx.drawImage(squirtle, canvas.width/2 - scissors.width/2 + 100, 375);

    ctx.fillText(result, canvas.width/2, 525);
}

var rps = [];
rps[0] = "Charmander";
rps[1] = "Bulbasaur";
rps[2] = "Squirtle";
document.getElementById("charmander").addEventListener("click",function(e){
    playGame(rps[0]);
});
document.getElementById("bulbasaur").addEventListener("click",function(e){
    playGame(rps[1]);
});
document.getElementById("squirtle").addEventListener("click",function(e){
    playGame(rps[2]);
});

function playGame(playersChoice){
    if(gameOver == true){
        return;
    }
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice);

    switch(playersChoice){
        case "Charmander":
            if(cpuChoice == 0) {
                result = "CPU chose Charmander. It's a tie!"
                draw(hcharmander, bulbasaur, squirtle, hcharmander, bulbasaur, squirtle);
            }
            else if(cpuChoice == 1) {
                result = "CPU chose Paper. CPU wins!"
                draw(hrock, paper, scissors, rock, hpaper, scissors);
            }
            else(cpuChoice == 2); {
                //alert("CPU chose Scissors. You win!");
                result = "CPU chose Scissors. You win!"
                draw(hrock, paper, scissors, rock, paper, hscissors);
            }
        break;
        case "Paper":
            if(cpuChoice == 0) {
            //Its a tie
                //alert("CPU chose Rock. You win!");
                result = "CPU chose Rock. You win!"
                draw(rock, hpaper, scissors, hrock, paper, scissors);
            }
            else if(cpuChoice == 1) {
                //alert("CPU chose Paper. It's a tie.");
                result = "CPU chose Paper. It's a tie!"
                draw(rock, hpaper, scissors, rock, hpaper, scissors);
            }
            else(cpuChoice == 2); {
                //alert("CPU chose Scissors. CPU wins.");
                result = "CPU chose Scissors. CPU wins!"
                draw(rock, hpaper, scissors, rock, paper, hscissors);
            }
        break;
        case "Scissors":
            if(cpuChoice == 0) {
            //Its a tie
                //alert("CPU chose Rock. CPU wins.");
                result = "CPU chose Rock. CPU wins!"
                draw(rock, paper, hscissors, hrock, paper, scissors);
            }
            else if(cpuChoice == 1) {
                //alert("CPU chose Paper. You win!");
                result = "CPU chose Paper. You win!"
                draw(rock, paper, hscissors, rock, hpaper, scissors);
            }
            else(cpuChoice == 2); {
                //alert("CPU chose Scissors. It's a tie.");
                result = "CPU chose Scissors. It's a tie!"
                draw(rock, paper, hscissors, rock, paper, hscissors);
            }
        break;
    }
}

