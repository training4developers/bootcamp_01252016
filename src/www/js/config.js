const dojoConfig = {
	async: true,

	packages: [
		{ name: "app", location: "../../js" },
		{ name: "jquery", location: "../jquery/dist", main: "jquery" },
		{ name: "underscore", location: "../lodash", main: "lodash" },
		{ name: "backbone", location: "../backbone", main: "backbone" },
		{ name: "react", location: "../react", main: "react" },
		{ name: "reactdom", location: "../react", main: "react-dom" },
		{ name: "flux", location: "../flux/dist", main: "Flux" },
		{ name: "immutable", location: "../immutable/dist", main: "immutable" }
	]
};
