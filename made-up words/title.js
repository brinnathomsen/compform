document.getElementById("title").textContent = generateTitle();
document.getElementById("subtitle").textContent = generateSubtitle();


function generateTitle() {


	var singular_nouns = [
		"cat",
		"dog",
		"foot",
		"Phone",
		"face",
		"car",
		"shirt",
		"clock",
		"pencil",
		"hand",
		"jacket",
		"lawnmower",
		"house",
		"computer",
		"nose",
		"husband",
		"friend"
	];

	var adjectives = [
		"afraid",
		"bumpy",
		"chilly",
		"dirty",
		"fluffy",
		"greasy",
		"hot",
		"icy",
		"itchy",
		"sunburnt",
		"angry",
		"broken",
		"nasty",
		"too beautiful",
		"wrong",
		"sick",
		"too addicting",
		"shaggy",
		"shaky",
		"dying",
		"purple",
		"stupendous",
		"tender",
		"tight",
		"uneven",
		"weak"
	];

	var secondary_nouns = [
		"Riddles",
		"Parables",
		"Fables",
		"Predicaments",
		"Trials",
		"Words",

		"Promises",
		"Lies",

		"Pests",
		"Beasts",
		"Trolls",
		"Shades",

		"Shadows",
		"Woods",
		"Lands",
		"Forests",

		"Brothers",
		"Sisters",
		"Children",

		"Days",
		"Nights",
		"Years",
		"Hours"
	];



	var singular_noun = sample(singular_nouns);
	var adjective = sample(adjectives);
	var secondary_noun = sample(secondary_nouns);

	var title = "";
	if (Math.random() < 0.5) {
		title = "my " + singular_noun + " was " + adjective;
	} else {
		title = "The " + adjective + " " + secondary_noun + " of " + name_prefix +
			" " + singular_noun;
	}

	return title;
}

function generateSubtitle() {
	var verbs = [
		"say hello",
		"make dinner",
		"go to bed",
		"go to work",
		"see you there",
		"finish my proposal",
		"get a good grade because",
		"call you",
		"write my paper",
		"pay the rent",
		"remember our anniversary",
		"remember your birthday",
		"go to your party",
		"do my homework",
		"pick up the dry-cleaning",
		"go grocery shopping"
	];



	var verb = sample(verbs);

	var subtitle = "I couldn't " + verb + " because";
	return subtitle;
}

function sample(a) {
	return a[Math.floor(Math.random() * a.length)];
}
