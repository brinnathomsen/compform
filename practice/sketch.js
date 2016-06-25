var shapes;



function setup() {
	createCanvas(800, 500);
	noLoop();
}

function draw() {
	background(50);

	var x = 10;
	drawBall(x + 100, 100, 255);
	drawBall(200, 200, color(255, 0, 0));

}


function drawBall(h, y, c) {
	push();
	fill(c);

	ellipse(h, y, 100, 100);
	pop();

}

function addEm(a, b) {

	return a + b;
}
