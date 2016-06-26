var tilt;
var color;

function setup() {
	createCanvas(800, 500);
	noLoop();
	noStroke();
	fill(255, 255, 255);
	tilt = random(0, 10);
	color = random(0, 255);
}

function draw() {

	colorMode(HSB);
	background(random(0, 300), random(100, 255), 100);


	for (var i = 0; i < 150; i++) {
		drawScribbles(random(10, 600), random(10, 600), random(1, 20), random(30,
			80));
	}
}

function drawScribbles(x, y, segmentLength, steps) {

	for (var step = 0; step < steps; step++) {
		stroke(random(color, color + 100), 5 * step, random(200, 255));
		strokeWeight(random(1, 5));

		var nextX, nextY;
		nextX = x + random(-segmentLength / tilt, segmentLength * tilt);
		nextY = y + random(-segmentLength / tilt, segmentLength * tilt);

		noFill();
		curve(random(500, 650), 200, x, y, nextX, nextY, 400, 300);

		x = nextX;
		y = nextY;
	}
}
