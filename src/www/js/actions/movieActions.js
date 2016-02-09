define(["app/actions","app/dispatcher","app/collections/movies"],

	function(appActions, appDispatcher, Movies) {

		"use strict";

		return {

			refresh: function() {
				let movies = new Movies();
				movies.fetch({
					success: function(movies, data, xhr) {
						appDispatcher.dispatch({
							actionType: appActions.MOVIES_REFRESH,
							movies: movies
						});
					}
				});
			}

		};

	});
