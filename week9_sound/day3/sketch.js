var fft;

var collect_bins = 1024;
var smoothing = 0.9;
var show_bins = 64;
var wave_scale = 1;



function preload() {
	// sound = loadSound('assets/queen.mp3');
	fft = new p5.FFT(smoothing, collect_bins);
}

function setup() {
	createCanvas(512, 512);
	//
	sound.loop();
}

function draw() {
	background(50);
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

		stroke(spectrum[i] - 100, 100, 10, spectrum[i]);
		stroke(255);
		ellipse(412, 100, 1 * 256 - spectrum[i] *
			wave_scale, 1 * 256 - spectrum[i] * wave_scale * 3);
		ellipse(100, 412, 1 * 256 - spectrum[i] *
			wave_scale, 1 * 256 - spectrum[i] * wave_scale * 3);
		ellipse(100, 100, 1 * 256 - spectrum[i] *
			wave_scale, 1 * 256 - spectrum[i] * wave_scale * 3);
		ellipse(412, 412, 1 * 256 - spectrum[i] *
			wave_scale, 1 * 256 - spectrum[i] * wave_scale * 3);


		ellipse(250, 250, 1 * 256 - spectrum[i] *
			wave_scale, 256 - spectrum[i] * wave_scale * 5);

		// 256 - spectrum[i] * wave_scale (i * 512 / show_bins)
	}



}
