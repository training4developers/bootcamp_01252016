define(["react"], function(React) {

	return React.createClass({

		getInitialState: function() {
			return {
				counter: 1
			};
		},

		_onClick: function() {
			this.setState({
				counter: this.state.counter + 1
			})
		},

		render: function() {
			return (
				<div>
					<div>{this.state.counter}</div>
					<button onClick={this._onClick}>Increment</button>
				</div>
			);
		}

	})

});
