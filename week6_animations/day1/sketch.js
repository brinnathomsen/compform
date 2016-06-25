var z = 1;
var wave = 10;

var amplitude = 1000;


function setup() {
	createCanvas(640, 640);

}

function draw() {
	background(0);
	fill(255);
	noStroke();
	z = z + 5;
	var period = 840;
	var phase = PI;

	amplitude = amplitude - 10;
	for (var x = -5000; x < 5000; x++) {


		var y = -sin((x / period * 2 * PI) + phase) * amplitude;
		var g = sin((x / period * 2 * PI) + phase) * amplitude;
		wave = x + z;
		y += height * 0.5;


		ellipse(wave, y, 1, 1);


		stroke(255);
		strokeWeight(0.25);
		line(width / 2, height / 4, wave, y);
		line(width / 2, height / 1.5, wave, y);
		// line(width / 2, height / 2, wave, y);

	}

	if (frameCount < 250) {
		saveFrame("day1", 250);
	} else {
		noLoop();
	}

	// for (var i = 0; i < 5000; i++) {
	// 	ellipse(width / 2 + (0.05 * i) * cos(i) + wave, height / 2 + (0.05 * i) * sin(
	// 		i) + wave, 5, 5);
	// }

}


function saveFrame(name, frameNumber) {
	// remove the decimal part (just in case)
	frameNumber = floor(frameNumber);
	// zero-pad the number (e.g. 13 -> 0013);
	var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

	save(name + "_" + paddedNumber);
}
