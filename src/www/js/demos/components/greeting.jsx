define(["react"], function(React) {

	return React.createClass({

		render: function() {
			return (
				<h1>{this.props.greeting}</h1>
			);
		}

	})

});
