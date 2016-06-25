var shapes;

function setup() {
	createCanvas(500, 500);

	shapes = [];
	for (var i = 0; i < 100; i++) {
		shapes[i] = {};
		shapes[i].x = random(0, 800);
		shapes[i].y = random(0, 500);
		shapes[i].speedY = random(5, 10);
		shapes[i].brightness = 500;
		shapes[i].strokeWeight = 9;
		shapes[i].size = 10;
		shapes[i].color1 = random(0, 255);
		shapes[i].color2 = random(0, 255);
		shapes[i].color3 = random(0, 255);



	}
}

function draw() {

	background(0);
	ellipseMode(CENTER);

	for (var i = 0; i < shapes.length; i++) {
		shapes[i].brightness = (i * 1.2);
		shapes[i].color = random(0, 255);
		// shapes[i].size = (i * 5);


		if (shapes.x < 250) {
			shapes.x = shapes.x - 0.001;
		} else if (shapes.x > 250) {
			shapes.x = shapes.x + 0.001;
		}

		if (shapes.y < 250) {
			shapes.y = shapes.y - 0.001;
		} else if (shapes.y > 250) {
			shapes.y = shapes.y + 0.001;
		}

		if (shapes.x > 500) {
			shapes.y = 250;
			shapes.x = 250;
			shapes.size = 10;
			brightness = 0;
		}
		// moveBall(shapes[i]);
		drawBall(shapes[i]);
	}
}

function drawBall(shapes) {
	push();
	colorMode(HSB);
	shapes.size = shapes.size + 40;
	strokeWeight(shapes.strokeWeight);
	stroke(0, 0, shapes.brightness, 40);
	// opacity(100);
	// fill(shapes.color1, 100, 100, 40);
	noFill();
	ellipse(shapes.x, shapes.y, shapes.size, shapes.size);
	pop();


}

// function moveBall(shapes) {
// 	shapes.y += shapes.speedY;
//
// 	// if (shapes.y > 500) {
// 	// 	shapes.y = -100;
// 	// }
// }
