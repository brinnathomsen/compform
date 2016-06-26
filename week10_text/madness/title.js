document.getElementById("title").textContent = generateTitle();



function generateTitle() {


	var prefixes = [
		"anti",
		"de",
		"dis",
		"en",
		"em",
		"fore",
		"in",
		"im",
		"inter",
		"mid",
		"mis",
		"non",
		"over",
		"pre",
		"re",
		"semi",
		"sub",
		"super",
		"trans",
		"un",
		"under"
	];

	var suffix = [
		"ed",
		"ing",
		"ly",
		"er",
		"ion",
		"ation",
		"ial",
		"al",
		"ness",
		"ment",
		"ic",
		"ous",
		"en",
		"er",
		"ive",
		"ative",
		"ful",
		"less",
		"est",
		"mania",
		"phobia",

	];

	var root = [
		"act",
		"agri",
		"ambi",
		"ana",
		"auto",
		"bene",
		"bibli",
		"capt",
		"cardi",
		"com",
		"contra",
		"cred",
		"de",
		"dem",
		"dict",
		"dys",
		"extra",
		"funct",
		"geo",
		"heli",
		"histo",
		"junct",
		"mal",
		"macro",
		"mega",
		"mob",
		"nav",
		"omni",
		"pale",
		"ped",
		"peri",
		"pos",
		"psych",
		"pul",
		"retro",
		"rupt",
		"self",
		"serv",
		"spir",
		"temp",
		"trans",
		"vers",
		"vice"


	];



	var start = sample(prefixes);
	var end = sample(suffix);
	var middle = sample(root);

	var title = "";

	title = start + middle + end;


	return title;
}



function sample(a) {
	return a[Math.floor(Math.random() * a.length)];
}
