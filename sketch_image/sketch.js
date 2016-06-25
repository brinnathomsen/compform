var line;

function setup() {
	createCanvas(800, 500);

	line = [];
	for (var i = 0; i < 10; i++) {

		line[i] = {};
		line[i].x = random(width);
		line[i].y = 0;
		line[i].speedY = random(2, 3);
		line[i].color = color(random(255), random(255), random(255));
		line[i].width = 1;
	}
}

function draw() {
	for (var i = 0; i < line.length; i++) {
		moveTree(line[i]);
		drawTree(line[i]);
	}


}

function drawTree(line) {
	push();

	noStroke();
	fill(line.color, 50);
	ellipse(line.x, line.y, line.width, line.width / 3);

	pop();
}

function moveTree(line) {
	line.y += line.speedY;
	line.width += random(1, 5);

	if (line.width > 10) {
		line.width += -random(-2, 5);
	}
}
