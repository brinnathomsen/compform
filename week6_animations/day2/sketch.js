var oval = {
	width: 50,
	xSpeed: -1,
	xPosition: 0,
	wave: 50,
	color: 100,
	stroke: 0.5
};


function setup() {
	createCanvas(800, 500);
	noFill();
	oval.color = random(0, 255);

}

function draw() {
	background(0);

	wave(oval);

	// if (frameCount < 150) {
	// 	saveFrame("bounce", frameCount);
	// } else {
	// 	noLoop();
	// }
}

function wave(shape) {
	var amplitude = 300;
	var period = 130;
	var phase = PI;
	shape.wave = sin((frameCount / period * 2 * PI) + phase) * amplitude;

	strokeWeight(shape.stroke);
	shape.xPosition = shape.xPosition + shape.xSpeed;
	for (var f = 0; f < 50; f++) {
		var y = sin((f * 10 / period * 2 * PI) + phase) * amplitude;
		for (var j = 0; j < 50; j++) {
			push();
			noStroke();
			colorMode(HSB);
			stroke(255, 0, j * 2);
			ellipse(shape.xPosition + (f * shape.width), 500 / 2, shape.width, (shape.wave +
				y) + (1000 + j * -20));
			pop();
		}
	}
}

// function saveFrame(name, frameNumber) {
// 	// remove the decimal part (just in case)
// 	frameNumber = floor(frameNumber);
// 	// zero-pad the number (e.g. 13 -> 0013);
// 	var paddedNumber = ("0000" + frameNumber).substr(-4, 4);
//
// 	save(name + "_" + paddedNumber);
// }
