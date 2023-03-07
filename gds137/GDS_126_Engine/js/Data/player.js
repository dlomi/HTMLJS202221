/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/asteriaSpriteSheet.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:96.95, height:250, startX:121, startY:1},
				{width:96.95, height:250, startX:222, startY:1},
				{width:96.95, height:250, startX:323, startY:1}
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:10,
			cycle:true,
			frames:
			[
				{width:96.95, height:244.15, startX:525, startY:1},
				{width:115.55, height:238.40, startX:626, startY:1},
				{width:115.55, height:241.20, startX:744, startY:1},
				{width:100.6, height:238.45, startX:862, startY:1},
				//{width:128, height:128, startX:512, startY:0}
			]
		},
		//The jump animation 
		jump:
		{
			fps:1,
			cycle:false,
			frames:
			[
				{width:99, height:106, startX:424, startY:1}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:1,
			cycle:false,
			frames:
			[
				{width:99, height:106, startX:424, startY:1},
				//{width:128, height:128, startX:768, startY:0},
				//{width:128, height:128, startX:768, startY:0},
				//{width:128, height:128, startX:768, startY:0},
				//{width:128, height:128, startX:896, startY:0}
			]
		},
		//The attack animation 
		attack:
		{
			fps:1,
			cycle:false,
			//width:300,
			frames:
			[
				{width:118, height:246, startX:0, startY:1},
				//{width:128, height:128, startX:1024, startY:0},
				//{width:128, height:128, startX:1024, startY:0},
				//{width:128, height:128, startX:1152, startY:0},
				//{width:128, height:128, startX:1152, startY:0},
				//{width:128, height:128, startX:1152, startY:0},
				//{width:128, height:128, startX:1152, startY:0}
				
			]
		}
		/*projectile:
		{
			fps:1,
			cycle:false,
			frames:
			[
				{width: }
			]
		}*/
	}
		
}