// Week 4: Turtle Graphics
// basic template sketch showing how to use the Turtle class
var myTurtle;
var color;
var branchlength1;
var branchlength2;
var variant;

function setup() {
	createCanvas(640, 640);
	noFill();
	stroke(255);
	background(250);
	// noLoop();


	myTurtle = new Turtle();
	color = random(0, 360);
	branchlength1 = random(20, 50);
	branchlength2 = random(20, 50);

}



function draw() {
	// move to starting position (without drawing)
	drawBranchPattern(20);
	drawBranchPattern(50);
	drawBranchPattern(0);
}

function drawBranchPattern(variant) {
	myTurtle.penUp();
	myTurtle.moveTo(320, 320);
	myTurtle.turnTo(0);
	myTurtle.penDown();

	drawBranch(branchlength1 + variant);

	myTurtle.penUp();
	myTurtle.moveTo(320, 320);
	myTurtle.turnTo(180);
	myTurtle.penDown();

	drawBranch(branchlength1 + variant);

	myTurtle.penUp();
	myTurtle.moveTo(320, 320);
	myTurtle.turnTo(90);
	myTurtle.penDown();

	drawBranch(branchlength2 + variant);

	myTurtle.penUp();
	myTurtle.moveTo(320, 320);
	myTurtle.turnTo(-90);
	myTurtle.penDown();

	drawBranch(branchlength2 + variant);

}


function drawBranch(length) {

	if (length < 30) {
		return;
	}

	colorMode(HSB);
	stroke(color, 360, length * 0.85);
	strokeWeight(length / 5);
	// draw this branch
	myTurtle.moveForward(length);

	// left child
	myTurtle.pushState();

	myTurtle.turnLeft(100);

	drawBranch(length * 0.85);
	myTurtle.popState();

	// right child
	myTurtle.pushState();
	myTurtle.turnRight(100);
	drawBranch(length * 0.85);
	myTurtle.popState();
}
