//Array of words
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");



var result = "Select a button from above to choose."

function draw(){
    ctx.font = "20px Arial";
    ctx.fillStyle = "blue;";
    ctx.fillText("Welcome to RPS Game!",200,280);
    
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "blue";
    ctx.fillText ("pChoice",canvas.width/2,100);
    ctx.fillText ("cChoice",canvas.width/2,325)

    ctx.fillText (result,canvas.width/2,525)

}







var rps = [];
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
});

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    alert(rps[pChoice] + " " + rps[cChoice]) 
    console.log(cpuChoice);

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                //alert(`You Tied`)
                result = "CPU chose Rock. You Tied!"
            }
            else if(cChoice === 1)
            {
                //display a loss
                //alert(`You Lost`)
                result = "CPU chose Paper. You Lost!"
            }
            else
            {
                //display a win
                //alert(`You Won`)
                result = "CPU chose Scissors. You won!"
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    //alert(`You Win`)
                    result = "CPU chose Rock. You Win!"
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    //alert(`Tie`)
                    result = "CPU chose Paper. Tie!"
                }
                else
                {
                    //display a win
                    //alert(`You Lost`)
                    result = "CPU chose Scissors. You Lost!"
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    //alert(`You Lost`)
                    result = "CPU chose Rock. You Lost!"
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    //alert(`You Win`)
                    result = "CPU chose Paper. You Win!"
                }
                else
                {
                    //display a win
                    //alert(`You Tie`)
                    result = "CPU chose Scissors. You Tie!"
                }
             break;
    }
}
