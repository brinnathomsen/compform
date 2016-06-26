// Week 4: Turtle Graphics
var myTurtle;
var lineLength;
var angle = 90;
var second = second();
var tilt = 0.15;
// var changeLeft = 10;
// var changeRight = 100;


function setup() {

	w = 1080;
	h = 1080;
	createCanvas(w, h);
	noFill();
	stroke(255, 255, 255, 127);
	background(0);
	//noLoop();


	myTurtle = new Turtle();

}

function draw() {

	if (second > 2) {
		angle = angle + 1;
	}

	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveTo(w * 0.5, w * 0.2);
	myTurtle.penDown();
	drawBranch(w * 0.25, h * 0.05, 1);
	drawBranch(w * 0.25, h * 0.05, 2);
	drawBranch(w * 0.25, h * 0.05, 3);



	angle = angle + 1;



}


function drawBranch(wDistance, hDistance, threshold) {
	strokeWeight(2);

	var lrForward = wDistance * 0.5;
	var downForward = hDistance * 0.5;

	if (wDistance < threshold) {
		// left child
		myTurtle.pushState();
		myTurtle.moveForward(w);
		myTurtle.popState();

	} else {

		myTurtle.turnTo(100);
		myTurtle.moveForward(hDistance);

		// left child

		myTurtle.turnRight(angle);
		myTurtle.moveForward(lrForward);
		myTurtle.popState();
		drawBranch(lrForward, downForward, threshold);
		myTurtle.popState();

		// right child

		// myTurtle.turnLeft(angle);
		// myTurtle.moveForward(wDistance);
		// myTurtle.turnTo(90);
		// drawBranch(lrForward, downForward, threshold);
		// myTurtle.popState();


	}
}

// saveFrame - a utility function to save the current frame out with a nicely formatted name
function saveFrame(name, frameNumber) {
	// remove the decimal part (just in case)
	frameNumber = floor(frameNumber);
	// zero-pad the number (e.g. 13 -> 0013);
	var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

	save(name + "_" + paddedNumber);
}
