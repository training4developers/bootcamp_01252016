define(["react", "app/components/header", "app/components/footer", "app/components/loading"],
	function(React, Header, Footer, Loading) {

		return React.createClass({

			getInitialState: function() {
				return { page: React.createElement(Loading) };
			},

			getPage: function(route) {
				return new Promise(function(resolve, reject) {
					require(["app/components/" + this.route], function(Page) {
						resolve(Page);
					});
				}.bind({ route: route }));
			},

			updatePage: function(route) {
				this.getPage(route).then(function(Page) {
					this.setState({ page: React.createElement(Page) });
				}.bind(this));
			},

			componentWillMount: function() {
				this.updatePage(this.props.route);
			},

			componentWillReceiveProps: function(nextProps) {
				if (nextProps.route !== this.props.route) {
					this.updatePage(nextProps.route);
				}
			},

			render: function() {
				return (
					<div>
						<Header />
						{this.state.page}
						<Footer />
					</div>
				);
			}

		})

	});
