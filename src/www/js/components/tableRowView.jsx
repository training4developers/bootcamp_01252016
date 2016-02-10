define(["react"], function(React) {

	return React.createClass({

		_onClick: function(e) {
			this.props.editRow(this.props.data.id);
		},

		render: function() {

			return (
				<tr>
					{this.props.columns.map(function(column) {
						return <td key={column.field}>{this.props.data[column.field]}</td>
					}.bind(this))}
					<td key="action">
						<button type="button" onClick={this._onClick}>Edit</button>
					</td>
				</tr>
			);

		}


	});



});
