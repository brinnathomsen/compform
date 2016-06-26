var nextX, nextY;
var testImage;

function preload() {
	testImage = loadImage("img/profile.jpg");
	noLoop();
}

function setup() {
	// create a place to draw
	createCanvas(800, 600);
	// load up the pixel[] array
	testImage.loadPixels();
}


function draw() {
	// clear the background
	background(0, 0, 0);

	// set drawing styles
	stroke(255, 0, 0);
	fill(255, 255, 255);


	image(testImage, 0, 0);
	stroke(0, 200, 100, 80);

	testImage.loadPixels();
	// loop over every x,y pixel coordinate in the image
	for (x = 0; x < 800; x++) {
		console.log(x);
		for (y = 0; y < 600; y++) {
			var redIn = testImage.pixels[(y * 800 + x) * 4 + 0];
			var greenIn = testImage.pixels[(y * 800 + x) * 4 + 1];
			var blueIn = testImage.pixels[(y * 800 + x) * 4 + 2];

			var redOut, blueOut, greenOut;


			// abstract the image
			var x2 = x + floor(random(-10, 50));
			var y2 = y + floor(random(-10, 50));

			// make sure we don't go outside the image
			x2 = clamp(x2, 0, 800);
			y2 = clamp(y2, 0, 800);

			// use the color from the random position
			redOut = testImage.pixels[(y2 * 800 + x) * 4 + 0];
			greenOut = testImage.pixels[(y * 800 + x2) * 4 + 1];
			blueOut = testImage.pixels[(y * 800 + x2) * 4 + 2];

			testImage.pixels[(y * 800 + x) * 4 + 0] = redOut;
			testImage.pixels[(y * 800 + x) * 4 + 1] = greenOut;
			testImage.pixels[(y * 800 + x) * 4 + 2] = blueOut;
		}

		testImage.updatePixels();

		image(testImage, 0, 0, 800, 600);


	}

	function clamp(v, low, high) {
		if (v < low) return low;
		if (v > high) return high;
		return v;
	}
}
