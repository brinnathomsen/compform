// Week 4: Turtle Graphics
// Day 1
var myTurtle;
var roundedness;
var colorHue;


function setup() {

	createCanvas(640, 640);
	noLoop();

	myTurtle = new Turtle(320, 320);
	roundedness = random(100, 110);
	colorHue = random(0, 360);

}



function draw() {
	background(0, 0, 0);
	colorMode(HSB);

	// spiral
	for (var i = 0; i < 100; i++) {
		var value = 2 + i;
		stroke(0, 0, value);
		myTurtle.moveForward(10);
		myTurtle.turnRight(200);


		for (var j = 0; j < 300; j++) {
			myTurtle.moveForward(i * 1.1);
			myTurtle.turnRight(10);

			push();
			stroke(colorHue, 255, 100);
			myTurtle.moveForward(i * 1.1);
			myTurtle.turnRight(roundedness);
			pop();

		}

	}

}
