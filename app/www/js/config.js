const dojoConfig = {
	async: true,

	packages: [
		{ name: "app", location: "../../js/app" },
		{ name: "jquery", location: "../jquery/dist", main: "jquery" },
		{ name: "underscore", location: "../underscore", main: "underscore" },
		{ name: "backbone", location: "../backbone", main: "backbone" }
	]
};
