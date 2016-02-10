define(["react"], function(React) {

	return React.createClass({

		render: function() {
			return (
				<thead>
					<tr>
						{this.props.columns.map(function(column) {
							return <th key={column.field}>{column.caption}</th>
						})}
						<th key="action">
							Action
						</th>
					</tr>
				</thead>
			);
		}

	})


});
