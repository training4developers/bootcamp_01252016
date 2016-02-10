define(["backbone"], function(Backbone) {

	var appRouter = new Backbone.Router();

	appRouter.start = function() {
		Backbone.history.start();
	};

	return appRouter;

});
