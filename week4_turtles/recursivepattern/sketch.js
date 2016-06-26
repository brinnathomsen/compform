// Week 4: Turtle Graphics
// basic template sketch showing how to use the Turtle class
var myTurtle;
var color;
var branchlength1;
var branchlength2;
var variant;
var brightness;
var curve;


function preload() {
	ellipse = loadImage("img/ellipse-01.png");
}

function setup() {
	createCanvas(640, 640);
	noFill();
	stroke(255);
	background(0);
	// noLoop();


	myTurtle = new Turtle();
	color = random(0, 360);
	branchlength1 = random(20, 50);
	branchlength2 = random(20, 50);
	brightness = length * 5;
	curve = random(30, 60);

}



function draw() {
	// move to starting position (without drawing)

	color = random(0, 360);
	drawBranchPattern(20);
	color = random(0, 360);
	drawBranchPattern(10);
	color = random(0, 360);
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


	if (length < 10) {
		return;
	}

	colorMode(HSB);
	stroke(color, 360, 100, random(0, 255));
	strokeWeight(length / 4);



	// draw this branch
	myTurtle.moveForward(length);

	// left child
	myTurtle.pushState();
	myTurtle.turnLeft(50);
	drawBranch(length * 0.85);
	myTurtle.popState();

	myTurtle.image(ellipse, 5, 5);

	// right child
	myTurtle.pushState();
	myTurtle.turnRight(50);
	drawBranch(length * 0.85);
	myTurtle.popState();



}
