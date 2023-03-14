/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

//insert x and y properties to adjust location of button 
var startButton = new GameObject({width:341.3, height:65, y:430});
//startButton.img.src="images/mrt.jpg"

console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/mainMenu.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		startButton.color = `lightblue`
	}
	else
	{
		//Default Button Graphic
		startButton.color = `lavender`
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage();
}
	
	
