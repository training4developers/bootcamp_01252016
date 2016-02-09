define(["underscore", "backbone"], function(_, Backbone) {

	const
		CHANGE_EVENT = "change";

	return class BaseStore {

		constructor() {
			_.extend(this, Backbone.Events);
		}

		emitChange() {
			this.trigger(CHANGE_EVENT);
		}

		addChangeListener(callback) {
			this.on(CHANGE_EVENT, callback);
		}

		removeChangeListener(callback) {
			this.off(CHANGE_EVENT, callback);
		}
	}

});
