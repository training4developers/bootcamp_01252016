define(["react", "backbone"], function(React, Backbone) {

	return React.createClass({

		mixins: [Backbone.Events],

		_onClick: function() {
			console.log("I clicked it!");
			console.dir(this);
			this.trigger("goto_about");
		},

		render: function() {
			return (
				<div>
					Home
					<button onClick={this._onClick}>Go to About</button>
					<br></br>
					<a href='#/about'>About</a>
				</div>
			);
		}

	});

});
