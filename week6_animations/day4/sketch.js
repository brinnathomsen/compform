var square;

function setup() {
	createCanvas(640, 640);
	square = [];
	for (var i = 0; i < 50; i++) {
		square[i] = {};
		square[i].x = width / 2;
		square[i].y = height / 2;
		square[i].speed = 1.01;
		square[i].value = 10;
		square[i].size = (50 * i);

	}

}

function draw() {
	background(0);
	noFill();
	stroke(255);


	rectMode(CENTER);
	for (var i = 0; i < square.length; i++) {
		moveSquares(square[i]);
		stroke(40 * i);
		rect(square[i].x, square[i].y, 30 + square[i].size, 30 + square[i].size);
	}

}

function moveSquares(square) {
	if (square.size > 800) {
		square.size = 50;

	}
	square.size = square.size * square.speed;
}


// var mountain;
//
// function setup() {
// 	createCanvas(800, 500);
//
// 	mountain = [];
// 	for (var i = 0; i < 10; i++) {
// 		mountain[i] = {};
// 		mountain[i].x = random(width);
// 		mountain[i].y = -10;
// 		mountain[i].speedY = random(5, 10);
// 		mountain[i].color = color(random(255), random(255), random(255), 50);
//
// 	}
// }
//
// function draw() {
//
//
// 	for (var i = 0; i < mountain.length; i++) {
// 		moveMountain(mountain[i]);
// 		drawMountain(mountain[i]);
//
// 		for (var j = 0; j < 10; j++) {
// 			stroke(255, j * 10, 100);
// 			drawBrownianPath(0, 200 + height * 0.02 * j, 5, 15, 1000);
//
// 		}
// 	}
//
// }
//
// function drawMountain(mountain) {
// 	push();
// 	strokeWeight(random(0, 50));
// 	stroke(mountain.color);
// 	// ellipse(mountain.x, mountain.y, random(10, 80), random(10, 80));
//
//
//
// 	pop();
// }
//
// function moveMountain(mountain) {
// 	mountain.y += mountain.speedY;
// }
//
// function drawBrownianPath(x, y, stepX, stepY, steps) {
// 	for (var step = 0; step < steps; step++) {
//
// 		var nextX, nextY;
//
// 		nextX = x + stepX;
//
// 		nextY = y + random(-stepY, stepY);
//
// 		for (var a = 0; a < 200; a++) {
// 			line(x, y + (a * 2), nextX, nextY + (a * 2));
// 		}
// 		x = nextX;
// 		y = nextY;
//
// 	}
// }
