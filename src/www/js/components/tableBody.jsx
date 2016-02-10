define(["react","app/components/tableRowView","app/components/tableRowEdit"],
	function(React, TableRowView, TableRowEdit) {

		return React.createClass({

			getInitialState: function() {
				return {
					editRowId: -1
				};
			},

			_editRow: function(rowId) {
				this.setState({
					editRowId: rowId
				});
			},

			_saveRow: function(row) {
				this.props.saveRow(row);
				this.setState({
					editRowId: -1
				});
			},

			_cancelEditRow: function() {
				this.setState({
					editRowId: -1
				});
			},

			render: function() {
				return (
					<tbody>
						{this.props.data.map(function(row) {

							if (this.state.editRowId === row.id) {
								return (
									<TableRowEdit key={row.id} columns={this.props.columns} data={row} saveRow={this._saveRow} cancelEditRow={this._cancelEditRow} />
								);
							} else {
								return (
									<TableRowView key={row.id} columns={this.props.columns} data={row} editRow={this._editRow} />
								);
							}

						}.bind(this))}
					</tbody>
				);
			}

		})


	});
