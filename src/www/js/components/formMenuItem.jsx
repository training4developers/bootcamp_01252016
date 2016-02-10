define(["react"], function(React) {

	return React.createClass({

		getInitialState: function() {
			return {
				label: "New Label",
				url: "New URL"
			};
		},

		_onChange: function(e) {
			console.log("onchange fired");
			var o = {};
			o[e.target.name] = e.target.value;
			this.setState(o);
		},

		_onClick: function() {
			this.props.addMenuItem(this.state);
			this.setState({
				label: "New Label",
				url: "New URL"
			});
		},

		render: function() {

			return (
				<form>
					<div>
						<label>
							Label
							<input type="text" name="label" value={this.state.label} onChange={this._onChange} />
						</label>
					</div>
					<div>
						<label>
							URL
							<input type="text" name="url" value={this.state.url} onChange={this._onChange} />
						</label>
					</div>
					<div>
						<button type="button" onClick={this._onClick}>Add Menu Item</button>
					</div>
				</form>
			);


		}

	})

});
