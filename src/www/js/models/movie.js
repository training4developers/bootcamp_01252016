define(["backbone"], function(Backbone) {

	return class Movie extends Backbone.Model {

		get idAttribute() {
			return "_id";
		}

		get urlRoot() {
			return "/api/movies";
		}
	};

	// var Movie = Backbone.Model.extend({
	// 	idAttribute: "_id",
	// 	urlRoot: "/api/movies"
	// });
});
