// shows how to use the p5.svg.js library to export a p5 drawing as svg

// requires p5.svg.js v0.5.2 and  p5.js v0.4.13
// https://github.com/zenozeng/p5.js-svg/releases
// https://github.com/processing/p5.js/releases



var myTurtle;
var roundedness;
var colorHue;


function setup() {

	createCanvas(640, 640, SVG);
	noLoop();

	myTurtle = new Turtle(320, 320);
	roundedness = random(100, 110);
	colorHue = 255;

	var button = createButton("Save SVG");
	button.mousePressed(function() {
		save();
	});
}



function draw() {



	// spiral
	for (var i = 0; i < 50; i++) {

		stroke(fill(0, 255), fill(255, 255), 255);
		strokeWeight(0.1);
		myTurtle.moveForward(10);
		myTurtle.turnRight(200);


		for (var j = 0; j < 100; j++) {
			myTurtle.moveForward(i / 1.1);
			myTurtle.turnRight(10);

			push();
			stroke(colorHue, 255, 255);
			myTurtle.moveForward(i * 1.1);
			myTurtle.turnRight(roundedness);
			pop();

		}

	}

}
