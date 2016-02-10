define(["react", "immutable", "app/components/menu", "app/components/formMenuItem"],
	function(React, Immutable, Menu, FormMenuItem) {

		return class App extends React.Component {

			constructor(props) {
				super(props);

				this.state = {
					menuItems: new Immutable.List(this.props.menuItems)
				};

				this._addMenuItem = this._addMenuItem.bind(this);
				this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
			}

			_addMenuItem(newMenuItem) {
				this.setState({
					menuItems: this.state.menuItems.push(newMenuItem)
				});
			}

			shouldComponentUpdate(nextProps, nextState) {
				return nextState.menuItems !== this.state.menuItems;
			}

			render() {

				console.dir(this);

				return(
					<main>
						<Menu menuItems={this.state.menuItems} />
						<FormMenuItem addMenuItem={this._addMenuItem} />
					</main>
				);

			}

		}

		// return React.createClass({
		//
		// 	getInitialState: function() {
		// 		return {
		// 			menuItems: new Immutable.List(this.props.menuItems)
		// 		};
		// 	},
		//
		// 	_addMenuItem: function(newMenuItem) {
		// 		this.setState({
		// 			menuItems: this.state.menuItems.push(newMenuItem)
		// 		});
		// 	},
		//
		// 	shouldComponentUpdate: function(nextProps, nextState) {
		// 		return nextState.menuItems !== this.state.menuItems;
		// 	},
		//
		// 	render: function() {
		//
		// 		console.dir(this);
		//
		// 		return(
		// 			<main>
		// 				<Menu menuItems={this.state.menuItems} />
		// 				<FormMenuItem addMenuItem={this._addMenuItem} />
		// 			</main>
		// 		);
		//
		// 	}
		//
		// })

	});
