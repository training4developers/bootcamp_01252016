define(["react", "app/components/table"], function(React, Table) {

	return React.createClass({

		render: function() {

			var columns = [
				{ caption: "First Name", field: "firstName" },
				{ caption: "Last Name", field: "lastName" },
				{ caption: "Age", field: "age" },
			];

			var data = [
				{ id: 1, firstName: "Bob", lastName: "Smith", age: 67 },
				{ id: 2, firstName: "Tim", lastName: "Sanders", age: 34 },
				{ id: 3, firstName: "Julie", lastName: "Goodman", age: 23 }
			];

			return (
				<div>
					<h1>Home!</h1>
					<a href='#/about'>About</a>
					<Table columns={columns} data={data}></Table>
				</div>
			);

		}

	});

});
