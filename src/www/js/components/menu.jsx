define(["react"], function(React) {

	return React.createClass({

		render: function() {
			return (
				<nav>
					<ul>
						{this.props.menuItems.map(function(menuItem) { return (
							<li key={menuItem.label}>
								<a href={menuItem.url}>{menuItem.label}</a>
							</li>
						); })}
					</ul>
				</nav>
			);
		}

	});


});
