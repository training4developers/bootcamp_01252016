define(["react", "app/stores/accounts", "app/actions/accounts"], function(React, accountsStore, accountsActions) {

	"use strict";

	class AccountRow extends React.Component {

		constructor(props) {
			super(props);

			this.state = {
			 	editRow: false
			};

			this._editField = this._editField.bind(this);
			this._saveRow = this._saveRow.bind(this);
			this._editRow = this._editRow.bind(this);
		}


		render() {

			if (this.state.editRow) {
				return (
					<tr>
						<td><input type="text" name="acctNum" value={this.state.account.get("acctNum")} onChange={this._editField} /></td>
						<td><input type="text" name="balance" value={this.state.account.get("balance")} onChange={this._editField} /></td>
						<td><button onClick={this._saveRow}>Save</button></td>
					</tr>
				);
			} else {
				return (
					<tr>
						<td>{this.props.account.get("acctNum")}</td>
						<td>{this.props.account.get("balance")}</td>
						<td><button onClick={this._editRow}>Edit</button></td>
					</tr>
				);
			}

		}

		_editField(e) {
			var account = this.state.account.clone()
			account.set(e.target.name, e.target.value);
			this.setState({
				account: account
			});
		}

		_editRow() {
			this.setState({
				account: this.props.account.clone(),
				editRow: true
			});
		}

		_saveRow() {
			var account = this.state.account;
			this.setState({
				account: undefined,
				editRow: false
			});
			accountsActions.updateAccount(account);
		}
	}

	return class AccountTable extends React.Component {

		constructor(props) {
			super(props);
			this.state = { accounts: accountsStore.getAll() };
		}

		componentDidMount() {
			accountsStore.addChangeListener(this._onChange.bind(this));
		}

		componentWillUnmount() {
			accountsStore.removeChangeListener(this._onChange.bind(this));
		}

		render() {

			return (
				<table>
					<thead>
						<tr>
							<th>Acct Num</th>
							<th>Balance</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.state.accounts.map(function(account) {
							return <AccountRow key={account.id} account={account}></AccountRow>;
						})}
					</tbody>
				</table>
			);

		}

		_onChange() {
			this.setState({
				accounts: accountsStore.getAll()
			});
		}
	};

});
