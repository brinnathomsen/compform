var tunnel;

function setup() {
	createCanvas(800, 500);
	noStroke();

	tunnel = {
		startX: random(300, 600),
		startY: 100,
		size: random(1000, 1500),
		hue: random(0, 300),
		angle1: random(20, 80),
		angle2: random(20, 80),
		angle3: random(20, 80),
		angle4: random(20, 80)
	};
}


function draw() {
	background(255);
	drawTunnels();
}


function drawTunnels() {

	for (var i = 0; i < 100; i++) {
		rectMode(CENTER);
		colorMode(HSB);
		fill(tunnel.hue, 10 * i, 255 / i);

		// SQUARE TUNNELS

		// rect(tunnel.startX + tunnel.angle4 * i, tunnel.startY * 2, tunnel.size / i,
		// 	tunnel.size /
		// 	i);
		//
		// rect(tunnel.startX - tunnel.angle1 * i, tunnel.startY, tunnel.size / i,
		// 	tunnel
		// 	.size /
		// 	i);
		//
		// rect(tunnel.startX * 2, tunnel.startY + tunnel.angle2 * i, tunnel.size / i,
		// 	tunnel.size /
		// 	i);
		//
		// rect(tunnel.startX * 2, tunnel.startY - tunnel.angle3 * i, tunnel.size / i,
		// 	tunnel.size /
		// 	i);

		//ELLIPSE OPTION
		ellipse(tunnel.startX + tunnel.angle4 * i, tunnel.startY * 2, tunnel.size / i,
			tunnel.size /
			i);

		ellipse(tunnel.startX - tunnel.angle1 * i, tunnel.startY, tunnel.size / i,
			tunnel
			.size /
			i);

		ellipse(tunnel.startX * 2, tunnel.startY + tunnel.angle2 * i, tunnel.size / i,
			tunnel.size /
			i);

		ellipse(tunnel.startX * 2, tunnel.startY - tunnel.angle3 * i, tunnel.size / i,
			tunnel.size /
			i);

	}
}
