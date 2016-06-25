var shapes;

function setup() {
	createCanvas(800, 500);

	shapes = [];
	for (var i = 0; i < 100; i++) {
		shapes[i] = {};
		shapes[i].x = random(width);
		shapes[i].y = -10;
		shapes[i].speedY = random(5, 10);
		shapes[i].color = color(random(255), random(255), random(255), 50);

	}
}

function draw() {


	for (var i = 0; i < shapes.length; i++) {
		moveBall(shapes[i]);
		drawBall(shapes[i]);
	}
}

function drawBall(shapes) {
	push();
	strokeWeight(random(0, 50));
	stroke(shapes.color);
	ellipse(shapes.x, shapes.y, random(10, 80), random(10, 80));
	pop();
}

function moveBall(shapes) {
	shapes.y += shapes.speedY;

	// if (shapes.y > 500) {
	// 	shapes.y = -100;
	// }
}
