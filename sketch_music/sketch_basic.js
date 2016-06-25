// This example shows the basics of using the MonoSynth
// class to play a series of musical notes.
//
// MonoSynth takes an array of song data to play.
//
// The song data is formatted like this
// ```
// [
// 	[notePitch, noteLength],
// 	[notePitch, noteLength],
// 	...
// ]
// ```
//
// `notePitch` is a [midi note number](http://www.electronics.dit.ie/staff/tscarff/Music_technology/midi/midi_note_numbers_for_octaves.htm)
//
// Midi note numbers are whole numbers
// starting at 0 for a very low C, ending at 127 for a very high G
// You *could* pass a number with a decimal portion,
// for out of tune notes.
//
// You can also pass `'rest'`, to create a rest.
//
// `noteLength` is the duration of the note, in seconds.
//
// MonoSynth will play the notes and rests in the provided array
// back to back.

// **setup()** is called by p5 kick off the program.
function setup() {
	createCanvas(640, 360);

	// Create an instance of MonoSynth to play the notes.
	var synth = new MonoSynth();

	// A hardcoded song.
	var song = [
		[64, 3 / 2],
		[34, 1 / 8],
		[60, 1 / 1],
		[52, 1 / 4],

		[64, 1 / 1],
		[78, 1 / 4],
		[64, 1 / 2]
	];


	for (var i = 0; i < array.length; i++) {
		song = [
			[64, 3 / i],
			[34, 1 / i],
			[60, 1 / i],
			[52, 1 / i],

			[64, 1 / i],
			[78, 1 / i],
			[64, 1 / i]
		];


	}


	// Pass the song to the synth.
	synth.playNotes(song);
}
