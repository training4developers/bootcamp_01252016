define(["react", "app/stores/movieStore", "app/actions/movieActions"], function(React, movieStore, movieActions) {

	"use strict";

	class MovieRow extends React.Component {

		constructor(props) {
			super(props);
		}

		render() {

			return (
				<tr>
					<td>{this.props.movie.get("name")}</td>
					<td>{this.props.movie.get("released")}</td>
					<td>{this.props.movie.get("rating")}</td>
					<td>{this.props.movie.get("genre")}</td>
				</tr>
			);

		}

	}

	return class MovieTable extends React.Component {

		constructor(props) {
			super(props);

			this.state = {
				movies: []
			};

			this._onChange = this._onChange.bind(this);
			this._onClick = this._onClick.bind(this);
		}

		componentDidMount() {
			movieStore.addChangeListener(this._onChange);
		}

		componentWillUnmount() {
			movieStore.removeChangeListener(this._onChange);
		}

		_onClick() {
			movieActions.refresh();
		}

		render() {

			var movieRows = [];

			this.state.movies.forEach(function(movie) {
				movieRows.push(<MovieRow key={movie.id} movie={movie}></MovieRow>);
			});

			return (
				<div>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Released</th>
								<th>Rating</th>
								<th>Genre</th>
							</tr>
						</thead>
						<tbody>
							{movieRows}
						</tbody>
					</table>
					<button type="button" onClick={this._onClick}>Refresh</button>
				</div>
			);

		}

		_onChange() {
			this.setState({
				movies: movieStore.getAll()
			});
		}

	};

});
