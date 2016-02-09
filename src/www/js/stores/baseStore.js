define(["backbone", "underscore"], function(Backbone, _) {

	"use strict";

	const EVENT_CHANGE = "change";

	return class BaseStore {

		constructor() {
			_.extend(this, Backbone.Events);
		}

		emitChange() {
			this.trigger(EVENT_CHANGE);
		}

		addChangeListener(cb) {
			this.on(EVENT_CHANGE, cb);
		}

		removeChangeListener(cb) {
			this.off(EVENT_CHANGE, cb);
		}

	};

});
