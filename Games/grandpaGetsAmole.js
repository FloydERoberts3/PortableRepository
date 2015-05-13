/**
 * This game chronicles grandpa eds never ending persuit of indiana moles in the acre of yard....
 * 
 */

//window.prompt ("Do you want to help grandpa Catch a mole or two");

// Create the canvas
var canvas = document.createElement("canvas");
var MCinstance = canvas.getContext("2d");
MCinstance.width = 1000;
MCinstance.height =500;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
bgReady = true;
};

/*
   bgImage.addEventListener("load", function() {
                // execute drawImage statements here
 	MCinstance.drawImage(bgImage, 0, 0);
     }, false);

*/

bgImage.src = "GirlsNmole.png";

// Draw everything
var render = function () {
	console.log(bgReady);
	
	if (bgReady === true) {
		MCinstance.drawImage(bgImage, 0, 0);
	}
    else 
    console.log("waiting on background image");
    
};


// Reset the game when the player catches a monster
var reset = function () {
};

// The main game loop
var main = function () {

	var now = Date.now();
	var delta = now - then;

	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
render();
window.alert("arewethereyet?");
main();
