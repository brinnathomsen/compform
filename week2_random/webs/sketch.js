function setup() {
	createCanvas(windowWidth, windowHeight);
	fill(255, 255, 255);
}

function draw() {
	background(40, 40, 40);

	var beat = random(0, 600);
	drawLines(0, 300, width / 2, beat);
	drawLines(550, 300, width / 2, -beat);
}

function drawLines(left, top, width, height) {
	// loop from the left to the right, one pixel per step
	for (var x = left; x < left + width; x++) {
		stroke(random(0, 255), random(0, 255), 220);
		fill(random(0, 255), random(0, 255), 220);

		// x and y are the base of the line
		var y = top;
		// height of the lines
		var lineLength = min(random(0, height), random(0, height), random(0, height));
		lineLength = random(0, height);
		// horizontal offset of top of blade relative to base
		// average two "rolls" to bias towards middle
		var lineLean = (random(-1, 1) + random(-1, 1)) * 0.4;

		// scale lean by height so that shorter lines aren't more leany
		lineLean = lineLean * lineLength;

		// decide lean of lines
		lineLean = lineLean * 10;

		// draw the lines & circles
		line(x, y, x + lineLean, y - lineLength);
		noStroke();
		ellipse(x + lineLean, y - lineLength, 10, 10);
	}
}
