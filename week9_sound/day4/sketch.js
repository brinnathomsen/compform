var fft;

var collect_bins = 1024;
var smoothing = 0.9;
var show_bins = 64;
var wave_scale = 1;



function preload() {
	sound = loadSound('assets/memories.mp3');
	fft = new p5.FFT(smoothing, collect_bins);
}

function setup() {
	createCanvas(512, 512);
	//
	frameRate(30);
	sound.loop();
}

function draw() {
	// background(50);
	// ellipse(100, 100, 10, 10);

	// find the frequencies in the sound playing
	var spectrum = fft.analyze();

	fill(50);

	// show the first bins

	var maxIndex = 0;
	var maxValue = spectrum[0];
	for (i = 0; i < show_bins; i++) {
		if (spectrum[i] > maxValue) {
			maxValue = spectrum[i];
			maxIndex = i;
		}
	}

	noStroke();
	fill(0);
	for (i = 0; i < show_bins; i++) {
		colorMode(HSB);
		noFill();
		strokeWeight(2);



		// 256 - spectrum[i] * wave_scale (i * 512 / show_bins)
	}
	colorMode(HSB);
	stroke(20, spectrum[i] + 100, 200, 10);
	strokeWeight(spectrum[i] - 50);
	drawBrownianPath(width * 0.5, height * 0.5, spectrum[i], 500);

	stroke(300, 0, 800, 10);
	strokeWeight(spectrum[i] - 50);
	drawBrownianPath(width * 0.5, height * 0.5, spectrum[i], 500);

	stroke(20, 0, 0, 10);
	strokeWeight(spectrum[i] - 50);
	drawBrownianPath(width * 0.5, height * 0.5, spectrum[i], 500);

	stroke(300, spectrum[i] + 100, 200, 10);
	strokeWeight(spectrum[i] - 50);
	drawBrownianPath(width * 0.5, height * 0.5, spectrum[i], 500);



}

function drawBrownianPath(x, y, segmentLength, steps) {
	for (var step = 0; step < steps; step++) {

		var nextX, nextY;

		////////////////////////////////////////////////////////////////////
		// even distribution

		nextX = x + random(-segmentLength, segmentLength);
		nextY = y + random(-segmentLength, segmentLength);


		////////////////////////////////////////////////////////////////////
		// diagonals grid

		// if (random() < 0.5) {
		// 	nextX = x - segmentLength;
		// } else {
		// 	nextX = x + segmentLength;
		// }
		//
		// if (random() < 0.5) {
		// 	nextY = y - segmentLength;
		// } else {
		// 	nextY = y + segmentLength;
		// }

		////////////////////////////////////////////////////////////////////
		// 9 ways grid
		// var rX = random();
		// if (rX < 0.33) {
		// 	nextX = x - segmentLength;
		// } else if (rX < 0.66) {
		// 	nextX = x + segmentLength;
		// } else {
		// 	nextX = x;
		// }
		//
		// var rY = random();
		// if (rY < 0.33) {
		// 	nextY = y - segmentLength;
		// } else if (rY < 0.66) {
		// 	nextY = y + segmentLength;
		// } else {
		// 	nextY = y;
		// }

		////////////////////////////////////////////////////////////////////
		// 9 ways another way
		//
		// nextX = x + floor(random(-1, 2)) * segmentLength;
		// nextY = y + floor(random(-1, 2)) * segmentLength;


		//
		line(x, y, nextX, nextY);

		x = nextX;
		y = nextY;

	}
}
