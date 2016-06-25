var fft;

var collect_bins = 1024;
var smoothing = 0.9;
var show_bins = 64;
var wave_scale = 1;



function preload() {
	sound = loadSound('assets/sillylovesongs.mp3');
	fft = new p5.FFT(smoothing, collect_bins);
}

function setup() {
	createCanvas(512, 512);
	//
	sound.loop();


	h1 = createElement('h1', 'silly love songs');
	h1.style("font-size", "18px");
	h1.style("color", "#fff");
}

function draw() {
	background(50);
	stroke(255);

	var spectrum = fft.analyze();
	value = spectrum[0] * 5;
	var hello = 500;

	h1.style("font-size", value + "px");
	h1.style("line-height", value + "px");
	h1.style("position", "fixed");
	h1.style("top", "0px");



}
