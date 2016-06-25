var water;
var w = 500;
var h = 500;
var lineHeight = 5;

// preload all images in folder into an array
function preload() {
	water = loadImage("img/water.jpg");
	noLoop();
}

function setup() {
	var c = createCanvas(800, 600);
	noLoop();
}

function draw() {
	// clear the background
	background(255, 255, 255);

	// load all pixels
	water.loadPixels();

	// draw background picture
	image(water, 0, 0);

	// rescan pixels and draw vertical lines from pixels below threshold
	// var threshold = heightSlider.value() / 100.0;
	for (y = 0; y < height; y++) {
		for (x = 0; x < width; x++) {

			var r = water.pixels[(y * width + x) * 4 + 0];
			var g = water.pixels[(y * width + x) * 4 + 1];
			var b = water.pixels[(y * width + x) * 4 + 2];

			stroke(r, g, b, 255);
			// draw trail
			if ((r > 100) && (g > 100) && (b > 20)) {

				trail(x, y);

			}
		}
	}

}


// declare trail function
function trail(x, y) {
	line(x * 10, y * 10, 10, 10);

}
