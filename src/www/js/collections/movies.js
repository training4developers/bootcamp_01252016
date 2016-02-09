define(["backbone", "app/models/movie"], function(Backbone, Movie) {

	return class Movies extends Backbone.Collection {

		get model() {
			return Movie;
		}

		get url() {
			return "/api/movies";
		}
	};

	// var Movie = Backbone.Collection.extend({
	// 	model: Movie,
	// 	url: "/api/movies"
	// });
});
