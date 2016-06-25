// Week 4: Turtle Graphics
// Day 1
var myTurtle;
var twoTurtle;
var threeTurtle;
var roundedness;
var jewelSize;

function preload() {
	testImage1 = loadImage("img/jewel.png");
	testImage2 = loadImage("img/sapphire.png");
	testImage3 = loadImage("img/gem.png");
}

function setup() {

	createCanvas(640, 640);
	noLoop();

	myTurtle = new Turtle(320, 320);
	twoTurtle = new Turtle(320, 320);
	threeTurtle = new Turtle(320, 320);

	roundedness = 800;
	jewelSize = random(100, 200);
}



function draw() {
	background(0, 0, 0);
	colorMode(HSB);
	myTurtle.penUp();
	twoTurtle.penUp();
	threeTurtle.penUp();
	// spiral
	for (var i = 0; i < 500; i++) {
		myTurtle.moveForward(i * 5);
		myTurtle.turnRight(30);
		myTurtle.turnRight(roundedness);
		myTurtle.image(testImage1, jewelSize, jewelSize);
	}

	for (var k = 0; k < 100; k++) {
		twoTurtle.moveForward(k * 3);
		twoTurtle.turnRight(20);
		twoTurtle.turnRight(roundedness);
		twoTurtle.image(testImage2, jewelSize - 10, jewelSize - 10);
	}

	for (var j = 0; j < 50; j++) {
		threeTurtle.moveForward(j * 3);
		threeTurtle.turnRight(90);
		threeTurtle.turnRight(roundedness);
		threeTurtle.image(testImage1, jewelSize - 50, jewelSize - 50);
	}
}
