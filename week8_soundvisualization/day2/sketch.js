var fft;

var collect_bins = 1024;
var smoothing = 0.9;
var show_bins = 64;
var wave_scale = 1;



function preload() {
	sound = loadSound('assets/queen.mp3');
	fft = new p5.FFT(smoothing, collect_bins);
}

function setup() {
	createCanvas(512, 512);
	//
	sound.loop();
}

function draw() {
	// background(255);
	// ellipse(100, 100, 10, 10);

	// find the frequencies in the sound playing
	var spectrum = fft.analyze();

	fill(50);
	// rect(0, 0, 512, 256);
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
		strokeWeight(spectrum[i] - 100);
		stroke(spectrum[i] - 100, 100, spectrum[i] / 2, spectrum[i]);
		line(256 - spectrum[i] * wave_scale, (i * 512 / show_bins), 0, 350);
		line(256 + spectrum[i] * wave_scale, i * 512 / show_bins, 512, 350);
	}

	// find the peak value/bin among the shown bins
	var maxIndex = 0;
	var maxValue = spectrum[0];
	for (i = 0; i < show_bins; i++) {
		if (spectrum[i] > maxValue) {
			maxValue = spectrum[i];
			maxIndex = i;
		}
	}



}
