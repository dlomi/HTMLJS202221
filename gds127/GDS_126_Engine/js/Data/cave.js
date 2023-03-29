var x=false;
var caveData ={
	info:{
		layout:[
			[0,10,17,17,17,30,31,32],
			[33,x,x,x,x,x,x,6],
			[7,x,x,x,x,x,x,12],
			[x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x]
			
			
		],
		src:`images/caveTiles.png`,
	},
	states:
	[		
			{//0
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			{//1
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:0}]
			},
			{//2
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:124, startY:0}]
			},
			{//3
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			{//4
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			{//5
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:0}]
			},
			{//6
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:0}]
			},
			{//7
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:0}]
			},
			{//8
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY:0}]
			},
			{//9
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY:0}]
			},
			{//10
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:640, startY:0}]
			},
			{//11
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:704, startY:0}]
			},
			{//12
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:768, startY:0}]
			},
			{//13
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:832, startY:0}]
			},
			{//14
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:896, startY:0}]
			},
			{//15
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:960, startY:0}]
			},
			{//16
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1024, startY:0}]
			},
			{//17
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1088, startY:0}]
			},
			{//18
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1152, startY:0}]
			},
			{//19
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1216, startY:0}]
			},
			{//20
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1280, startY:0}]
			},
			{//21
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1326, startY:0}]
			},
			{//22
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1381, startY:0}]
			},
			{//23
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1443, startY:0}]
			},
			{//24
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1507, startY:0}]
			},
			{//25
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1571, startY:0}]
			},
			{//26
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1635, startY:0}]
			},
			{//27
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1699, startY:0}]
			},
			{//28
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1763, startY:0}]
			},
			{//29
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1827, startY:0}]
			},
			{//30
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1891, startY:0}]
			},
			{//31
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:1955, startY:0}]
			},
			{//32
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:2019, startY:0}]
			},
			{//33
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:2083, startY:0}]
			},
			{//34
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:2147, startY:0}]
			},
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[0,x,x,x,x,x,x,x],
			[x,1,2,3,34,4,5,x],
			[x,8,9,9,9,9,11,x],
			[13,14,9,15,16,16,18,19],
			[20,9,9,21,x,x,22,23],
			[20,9,9,24,25,25,26,27],
			[20,9,9,9,9,9,28,29],
			],
			src:`images/caveTiles.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8],
					[2,8,1,8,1,1,8,1],
					[2,x,x,8,x,x,8,x],
					[x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x],
					
					
				],
				src:`images/caveTiles.png`,
			},
			states:caveData.states
			
			}