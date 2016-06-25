var fft;

var collect_bins = 1024;
var smoothing = 0.90;
var show_bins = 64;
var wave_scale = 1;



function preload() {
	// sound = loadSound('assets/rhiannon.mp3');
	fft = new p5.FFT(smoothing, collect_bins);
}

function setup() {
	createCanvas(710, 400, WEBGL);
	//
	sound.loop();
}

function draw() {


	var spectrum = fft.analyze();
	colorMode(HSB);
	background(300, 200, 40);
	rotateY(frameCount * 0.01);

	for (var j = 0; j < 5; j++) {
		push();
		for (var i = 0; i < 80; i++) {

			rotateY(spectrum[j] * 0.001);
			rotateZ(spectrum[j] * 0.001);
			translate(spectrum[i] * 0.001, 2);

			push();
			// cylinder(spectrum[i] + 300, spectrum[i] + 300, 4);

			cone(spectrum[i] * 3 - 300, spectrum[i] * 3 - 300, 4);

			pop();
		}
		pop();
	}


	// textSize(16);
	// textAlign(RIGHT);
	// text("ABCD", 50, 30);
	// background(255);
	// ellipse(100, 100, 10, 10);

	// find the frequencies in the sound playing

	//
	// 	fill(50);
	// 	rect(0, 0, 512, 512);
	// 	// show the first bins
	// 	noStroke();
	// 	fill(0);
	// 	for (i = 0; i < show_bins; i++) {
	// 		colorMode(HSB);
	// 		fill(spectrum[i] - 50, random(50, 150), spectrum[i] / 1.5, spectrum[i]);
	// 		ellipse(256 - spectrum[i] * wave_scale, i * 512 / show_bins, 50, -50);
	// 		ellipse(256 + spectrum[i] * wave_scale, i * 512 / show_bins, 50, -50);
	// 	}
	//
	// 	// find the peak value/bin among the shown bins
	// 	var maxIndex = 0;
	// 	var maxValue = spectrum[0];
	// 	for (i = 0; i < show_bins; i++) {
	// 		if (spectrum[i] > maxValue) {
	// 			maxValue = spectrum[i];
	// 			maxIndex = i;
	// 		}
	// 	}
	//
	//
	//
}
