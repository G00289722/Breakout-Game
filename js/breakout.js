// Setup the canvas 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Set up the starting point 
var x = canvas.width/2;
var y = canvas.height-30;

//Draw the ball 
function draw()	{
		ctx.beginPath();
		ctx.arc(x, y, 10, 0, Math.PI*2);
		ctx.fillstyle = "#0095DD";
		ctx.fill();
		ctx.closePath();
	
}

setInterval(draw, 10);