document.getElementById("title").textContent = generateStory();



function generateStory() {


	var characterTypes = [
		"boy",
		"man",
		"woman",
		"girl",
		"knight",
		"princess",
		"prince",
		"fairy",
		"wizard",
		"peasant",
		"elf",
		"unicorn",
		"mermaid",


	];

	var names = [
		"Belsante",
		"Briar",
		"Clarimond",
		"dulcinea",
		"Everild",
		"Ghislaine",
		"Jessamy",
		"Katrin",
		"Lael",
		"Lore",
		"Kabriel",
		"Declan",
		"Kalen",
		"Darien",
		"Aubrey",
		"Adrieyl",
		"Gabriel",
		"Indigo",
		"Elven",
		"Aine",
		"Cleo",

	];

	var towns = [
		"Fallwood",
		"Milley",
		"Lightbarrow",
		"Summerspell",
		"Riverdell",
		"Crystalmont",
		"Millfield",
		"Hedgeshore",
		"Vertwitch",
		"Byflower",
		"Eastwyvern",
		"Wildebush",
		"Coldsilver",
		"Brookeshore",
		"Northham",
		"Westerfall",
		"Wellapple",
		"Bywald",
		"Butterdell",
		"Aldmarsh",
		"Strongbridge",
		"Morford",
		"Goldwyn",
	];

	var monsters = [
		"Ogre",
		"Ghoul",
		"Dragon",
		"Werewolf",
		"Vampire",
		"Giant",
		"Sorcerer",
		"witch",
		"troll",
		"beast",
	];

	var weapons = [
		"sword",
		"rock",
		"dagger",
		"bow",
		"spear",
		"axe",
	];

	var endings = [
		"trapped it in a cave",
		"set off an avalanche that crushed it",
		"stabbed it with a pine cone",
		"sang it a lullaby until it fell asleep and then put it on a boat and sailed it to a secluded island",
		"asked it who had hurt it in life and talked to it until the two had become good friends",
		"threw a flask of alchohol in it's eyes and pushed it off a cliff",
	];



	var characterType = sample(characterTypes);
	var name = sample(names);
	var town = sample(towns);

	var setting = "";
	var defeatingTheBeast = "";
	var defeatingTheBeast = "";



	setting = "In the town of " + town + " there once was a " + characterType +
		" named " + name + ". ";

	var monster = sample(monsters);
	var weapon = sample(weapons);
	var ending = sample(endings);

	defeatingTheBeast = "One day, an evil " + monster +
		" began terrorizing " + town +
		", destroying homes and killing innocent creatures. It seemed as if no one could defeat the " +
		monster + " and many had lost their lives trying. " + name +
		", though not the most intelligent or tough " + characterType +
		", decided to gather the courage to seek out and stop the " +
		monster +
		" from commiting any more evil among the creatures of " + town + ". " + name +
		" confronted the " + monster + " on the edge of town, lifted up a " +
		weapon + " and tried to strike the beast but missed terribly. The " + monster +
		" turned to attack " + name + ", who barely avoided it's blows. Suddenly " +
		name + " had an idea! Acting quickly, " + name + " " + ending +
		" and it remained there never to hurt the kindom again. The end. ";



	return setting + defeatingTheBeast;
}



function sample(a) {
	return a[Math.floor(Math.random() * a.length)];
}
