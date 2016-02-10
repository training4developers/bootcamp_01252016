define(["react","app/components/tableHeader","app/components/tableBody"],
	function(React, TableHeader, TableBody) {

		return React.createClass({

			getInitialState() {
				return { data: this.props.data };
			},

			_saveRow: function(row) {

				_.extend(_.find(this.state.data, function(dataRow) {
					return dataRow.id === row.id;
				}), row);

				this.setState({
					data: this.state.data
				});
			},

			render: function() {
				return (
					<table>
						<TableHeader columns={this.props.columns} />
						<TableBody columns={this.props.columns} data={this.state.data} saveRow={this._saveRow} />
					</table>
				);
			}

		});

	});
