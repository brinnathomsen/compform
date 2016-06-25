var fft;

var collect_bins = 1024;
var smoothing = 0.9;
var show_bins = 64;
var wave_scale = 1;

var size;

function preload() {
	sound = loadSound('assets/rhiannon.mp3');
	fft = new p5.FFT(smoothing, collect_bins);
}

function setup() {
	createCanvas(512, 512);
	//
	sound.loop();
	size = 500;
}

function draw() {

	var spectrum = fft.analyze();

	fill(50);
	size = size - 1;
	noStroke();
	fill(0);
	for (i = 0; i < show_bins; i++) {
		colorMode(HSB);
		strokeWeight(10);
		stroke(spectrum[i] - 100, 100, spectrum[i] / 2, spectrum[i]);
		ellipse(256 - spectrum[i] * wave_scale, (i * 512 / show_bins), spectrum[i],
			spectrum[i]);

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
