/**
 * This game chronicles grandpa eds never ending persuit of indiana moles in the acre of yard....
 * 
 */

//The document ready is to insure that everything is loaded prior to running
//$(document).ready(function() {

window.prompt ("Do you want to help grandpa Catch a mole or two");

var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var WIDTH = 400;
var HEIGHT = 300;


/*
// Create the second canvas
var FER3maincanvas = document.createElement("canvas");
var MCinstance = FER3maincanvas.getContext("2d");
FER3maincanvas.width = 512;
FER3maincanvas.height = 500;
document.body.appendChild(FER3maincanvas);

// Create the second canvas
var Secondcanvas = document.createElement("canvas");
var SecondCanvasContext = Secondcanvas.getContext("2d");
Secondcanvas.width = 512;
Secondcanvas.height = 500;
document.body.appendChild(Secondcanvas);
*/

var MCinstance = FER3maincanvas.getContext("2d");
// Images
/*
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
bgReady = true;
};

bgImage.src = "BackYardPreZoom.png";
*/

var moleReady = false;
var moleImage = new Image();
moleImage.onload = function () {
moleReady = true;
};

moleImage.src = "FocaDotTKmole3.png";

var grandpaReady = false;
var grandpaImage = new Image();
grandpaImage.onload = function () {
grandpaReady = true;
};

grandpaImage.src = "grandpa.png";


// Game objects - IMPORTANT NOTE - THE game objects are DIFFERENT from
// the Images - the Images are simply written to the location of the game objects
var grandpa = {
	speed: 256, // movement in pixels per second
	x: 250,
	y: 250
};
var mole = {
	speed: 64,
	x: 300,
	y: 300
};
var MolesCaught = 0;


// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		grandpa.y -= grandpa.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		grandpa.y += grandpa.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		grandpa.x -= grandpa.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		grandpa.x += grandpa.speed * modifier;
	}

	// Are they touching?
	if (
		grandpa.x <= (mole.x + 5)
		&& mole.x <= (grandpa.x + 5)
		&& grandpa.y <= (mole.y + 5)
		&& mole.y <= (grandpa.y + 5)
	) {
	//	++MolesCaught;
		reset();
	}

};
// Draw everything
var render = function () {
	MCinstance.clearRect(0,0,400,300);
/*	
	if (bgReady === true) {
		MCinstance.drawImage(bgImage, 0, 0);
	}
    else {
    console.log("waiting on background image");
    }
*/
    console.log(moleReady);
    if (moleReady === true) {
    		MCinstance.drawImage(moleImage, mole.x, mole.y);
	}
    else {
    console.log("waiting on mole image");
    }
      if (grandpaReady === true) {
    		MCinstance.drawImage(grandpaImage, grandpa.x, grandpa.y);
	}
    else {
    console.log("waiting on mole image");
    }
    
 
      MCinstance.beginPath();
  	  MCinstance.arc(x, y, 5, 0, Math.PI*2, true); 
  	  MCinstance.closePath();
 	  MCinstance.fill();
      x += dx;
      y += dy;
      
      if (x + dx > WIDTH || x + dx < 0)
      dx = -dx;
      if (y + dy > HEIGHT || y + dy < 0)
      dy = -dy;   
      
   
};


// Reset the game when the player catches a monster
var reset = function () {
	grandpa.x = 300;
	grandpa.y = 300;

	// Throw the monster somewhere on the screen randomly
	mole.x = 32 + (Math.random() * (250));
	mole.y = 32 + (Math.random() * (250));
};

// The main game loop
var main = function () {

	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
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
main();
