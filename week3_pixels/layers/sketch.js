var testImage;


function preload() {
	testImage = loadImage("img/water2.jpg");
	// noLoop();
}

function setup() {
	// create a place to draw
	createCanvas(500, 500);

}

function draw() {
	// clear the background
	background(0, 0, 0);



	testImage.loadPixels();
	// loop over every x,y pixel coordinate in the image
	for (x = 0; x < 500; x++) {
		console.log(x);
		for (y = 0; y < 1000; y++) {
			var redIn = testImage.pixels[(y * 500 + x) * 4 + 0];
			var greenIn = testImage.pixels[(y * 500 + x) * 4 + 1];
			var blueIn = testImage.pixels[(y * 500 + x) * 4 + 2];

			var redOut, blueOut, greenOut;



			// choose random position for the sample
			var x2 = x + 2;
			var y2 = y + 2;


			// use the color from the random position
			redOut = testImage.pixels[(x2 * 500 + y) * 4 + 0];
			greenOut = testImage.pixels[(x2 * 500 + y2) * 4 + 1];
			blueOut = testImage.pixels[(x2 * 500 + y2) * 4 + 2];


			testImage.pixels[(y * 500 + x) * 4 + 0] = redOut;
			testImage.pixels[(y * 500 + x) * 4 + 1] = greenOut;
			testImage.pixels[(y * 500 + x) * 4 + 2] = blueOut;
		}
	}

	testImage.updatePixels();

	image(testImage, 0, 0, 500, 500);

}
