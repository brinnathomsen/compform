// shows how to use the p5.svg.js library to export a p5 drawing as svg

// requires p5.svg.js v0.5.2 and  p5.js v0.4.13
// https://github.com/zenozeng/p5.js-svg/releases
// https://github.com/processing/p5.js/releases

var nextX, nextY;

function setup() {
	// create a place to draw use "SVG" to activate the SVG p5 plugin
	createCanvas(6 * 172, 6 * 72, SVG);
	noLoop();
	fill(255, 0, 0);
	stroke(100);
	strokeWeight(2);
	noLoop();

	noStroke();

	// use p5.dom.js to create a button and set it up to call "save()"
	var button = createButton("Save SVG");
	button.mousePressed(function() {
		save();
	});
}



function draw() {
	background(40, 40, 40);

	//fill(220, 220, 220);


	for (var i = 0; i < 5; i++) {

		stroke(random(0, 255), random(0, 255), random(0, 255));
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
