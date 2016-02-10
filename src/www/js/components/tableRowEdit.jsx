define(["react", "underscore"], function(React, _) {

	return React.createClass({

		getInitialState() {

			return { data: _.extend({ }, this.props.data) };
		},

		_onChange: function(e) {

			_.extend(this.state.data, {
				[e.target.name]: e.target.value
			});

			this.setState(this.state.data);
		},

		_onSave: function() {
			this.props.saveRow(this.state.data);
		},

		_onCancelEdit: function() {
			this.props.cancelEditRow();
		},

		render: function() {

			return (
				<tr>
					{this.props.columns.map(function(column) {
						return (
							<td key={column.field}>
								<input type="text" name={column.field}
									value={this.state.data[column.field]}
									onChange={this._onChange} />
							</td>
						);
					}.bind(this))}
					<th>
						<button type="button" onClick={this._onSave}>Save</button>
						<button type="button" onClick={this._onCancelEdit}>Cancel</button>
					</th>
				</tr>
			);

		}


	})



});
