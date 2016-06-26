var nextX, nextY;

function setup() {
	createCanvas(800, 500);
	noLoop();

	noStroke();
}

function draw() {
	background(40, 40, 40);

	//fill(220, 220, 220);


	for (var i = 0; i < 5; i++) {

		stroke(random(100, 300), random(100, 300), 50);
		drawBrownianPath(width * random(0.30, 0.6), height * random(0.3, 0.6), 30,
			100);

	}
}

function drawBrownianPath(x, y, segmentLength, steps) {
	for (var step = 0; step < steps; step++) {



		////////////////////////////////////////////////////////////////////
		// even distribution

		nextX = x - random(-segmentLength, segmentLength);
		nextY = y + random(-segmentLength, segmentLength);
		line(x, y, nextX, nextY);

		x = nextX;
		y = nextY;


		line(400, 250, nextX, nextY);
	}
}
