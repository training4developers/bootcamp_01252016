const dojoConfig = {
	async: true,

	packages: [
		{ name: "app", location: "../../js" },
		{ name: "jquery", location: "../jquery/dist", main: "jquery" },
		{ name: "lodash", location: "../lodash", main: "lodash" },
		{ name: "backbone", location: "../backbone", main: "backbone" },
		{ name: "react", location: "../react", main: "react" },
		{ name: "reactdom", location: "../react", main: "react-dom" }
	],

	shim : {
		backbone : {
			deps : [
				"jquery",
				"lodash"
			],
			exports : "Backbone"
		},
		jquery : {
			exports : "$"
		},
		lodash : {
			exports : "_"
		},
		react: {
			exports: "React"
		},
		reactdom: {
			export: "ReactDOM"
		}
	}
};
