define(["app/actions","app/dispatcher", "app/stores/baseStore"],
	function(appActions, appDispatcher, BaseStore) {

		"use strict";

		let _movies = null;

		class MovieStore extends BaseStore {

			constructor() {
				super();
			}

			getAll() {
				return _movies;
			}

		}

		let movieStore = new MovieStore();

		appDispatcher.register(function(action) {

			switch (action.actionType) {
				case appActions.MOVIES_REFRESH:
					_movies = action.movies;
					movieStore.emitChange();
					break;
				default:
					// no operation
					break;
			}

		});

		return movieStore;

	});
