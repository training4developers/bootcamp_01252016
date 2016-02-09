define(["react"], function(React) {


	return class Link extends React.Component {

		render() {
			return (
				<a href={this.props.url}>{this.props.label}</a>
			);
		};

	};


});
