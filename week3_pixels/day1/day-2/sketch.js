var heightSlider;
var leanSlider;
var nextX, nextY;

var testImage;

function preload() {
	testImage = loadImage("img/forest.jpg");
	noLoop();
}

function setup() {
	// create a place to draw
	createCanvas(800, 600);

	// load up the pixel[] array so we can read colors out of it later
	testImage.loadPixels();

	heightSlider = createSlider(0, 500, 100);
	leanSlider = createSlider(0, 500, 100);
	heightSlider.changed(draw);
	leanSlider.changed(draw);
}


function draw() {
	// clear the background
	background(0, 0, 0);

	// set drawing styles
	stroke(255, 0, 0);
	fill(255, 255, 255);


	image(testImage, 0, 0);
	stroke(0, 200, 100, 80);

	// loop over every x,y pixel coordinate in the image
	for (x = 0; x < 800; x++) {
		for (y = 0; y < 600; y++) {

			var pixelRed = testImage.pixels[(y * 800 + x) * 4];

			if (random(253, 800) < pixelRed) {
				decoration(x, y);
			}
		}
	}
}

function decoration(x, y) {
	fill(255);
	noStroke();

	ellipse(x, y, 10, 10);
	for (var i = 0; i < 5; i++) {


		stroke(255, 255, 255);

		drawBrownianPath(width * random(0.30, 0.6), height * random(0.3, 0.6), 10,
			25);

		line(x, y, nextX, nextY);

	}
}

function drawBrownianPath(x, y, segmentLength, steps) {
	for (var step = 0; step < steps; step++) {


		nextX = x - random(-segmentLength, segmentLength);
		nextY = y + random(-segmentLength, segmentLength);
		line(x, y, nextX, nextY);

		x = nextX;
		y = nextY;


	}
}
