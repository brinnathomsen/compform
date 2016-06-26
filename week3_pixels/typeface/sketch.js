var testImage;

function preload() {
	testImage = loadImage("img/hellothere-01.jpg");
	noLoop();
}

function setup() {
	// create a place to draw
	createCanvas(736, 515);

	// load up the pixel[] array so we can read colors out of it later
	testImage.loadPixels();

}


function draw() {
	// clear the background
	background(0, 0, 0);

	// set drawing styles
	stroke(255, 0, 0);


	// loop over every x,y pixel coordinate in the image
	for (x = 0; x < 736; x++) {
		for (y = 0; y < 515; y++) {
			fill(random(0, 255), random(0, 255), 255);
			strokeWeight(0.05);
			stroke(255, 255, 100, 80);

			var pixelRed = testImage.pixels[(y * 736 + x) * 4];


			if (random(2, 5) > pixelRed) {
				grass(x, y);
			}
		}
	}
}

function grass(x, y) {


	ellipse(x, y, 15, 10);

}
