// There are many ways to create song data, in this example
// **makeSongRandom()** generates a song by randomly choosing notes
// from a set.


// **setup()** is called by p5 kick off the program.
function setup() {
	createCanvas(640, 360);

	// Create an instance of MonoSynth to play the notes.
	var synth = new MonoSynth();

	// Generate a song.
	var song = makeSongRandom();

	// Pass the song to the synth.
	synth.playNotes(song);
}

// **makeSongRandom()** generates the song data.
function makeSongRandom() {

	// Start with an empty array, we can `push()` notes onto.
	var song = [];

	// Lets make sixteen notes.
	for (var i = 0; i < 16; i++) {
		// Create an array holding the scale note values.
		// We will pick values at random from this array.

		// Here we use the notes in the Chromatic Scale (all the notes in the octave)
		var scale = [20, 21, 22, 23, 24, 25, 2, 27, 28, 29, 70, 71, "rest"];
		// Or we could use the notes in C Major
		var scale = ([20, 25, 20, 25, 27, 29, 21, "rest"]);
		// Or we could use the notes in C Minor
		/* var scale = sample([60, 62, 63, 65, 67, 68, 70, "rest"]); */

		// Each note in the song data is an array with two values: note and length.
		// Here, a new note is created by randomly picking a note and length.
		var note = [
			sample(scale),
			sample([1 / 2, 1 / 4, 1 / 3, 1 / 5])
		];

		// Add the note to the song.
		song.push(note);
	}

	// We've made a song, send it back to the caller.
	return song;
}

// **sample()** recieves and array, selects an item in the array randomly, and returns it
function sample(a) {
	return a[floor(random(a.length))];
}
