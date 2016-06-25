var testImage;

function preload() {
	testImage = loadImage("img/water.jpg");
	noLoop();
}

function setup() {
	// create a place to draw
	createCanvas(1024, 1024);

	// load up the pixel[] array so we can read colors out of it later

}


function draw() {
	// clear the background
	background(0, 0, 0);

	// set drawing styles
	stroke(255, 0, 0);
	fill(255, 255, 255);



	stroke(0, 200, 100, 80);

	testImage.loadPixels();
	// loop over every x,y pixel coordinate in the image
	for (x = 1024; x < 2048; x++) {
		console.log(x);
		for (y = 0; y < 2048; y++) {
			var redIn = testImage.pixels[(y * 2048 + x) * 4 + 0];
			var greenIn = testImage.pixels[(y * 2048 + x) * 4 + 1];
			var blueIn = testImage.pixels[(y * 2048 + x) * 4 + 2];

			var redOut, blueOut, greenOut;

			//////////////////
			/// Demo 1: swap channels

			redOut = blueIn;
			blueOut = greenIn;
			greenOut = redIn;


			testImage.pixels[(y * 600 + 50 * 2048 + x * 4) * 4 + 0] = 255;
			testImage.pixels[(y * 600 + 50 * 2048 + x) * 4 + 1] = 255;
			testImage.pixels[(y * 600 + 50 * 2048 + x) * 4 + 2] = blueIn;
		}
	}
	testImage.updatePixels();

	image(testImage, 0, 0, 1024, 1024);


}

function clamp(v, low, high) {
	if (v < low) return low;
	if (v > high) return high;
	return v;

	//	v = max(v, low);
	//	v = min(v, high);
	//	return v;
}


// download the image
function mouseReleased() {
	console.log("save");
	save();
}
