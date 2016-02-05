define(["jquery","underscore","backbone"],
	function($, _, Backbone) {

		"use strict";

		return class UIGrid {

			constructor(config) {
				_.extend(this, Backbone.Events);
				this._config = config;
				this._template = "<table><thead></thead><tbody></tbody></table>";
				this._currentEditRow = null;
			}

			_headerRow() {
				var tr = document.createElement("tr");
				this._config.columns.forEach(function(column) {
					var th = document.createElement("th");
					th.innerText = column.caption;
					tr.appendChild(th);
				});

				var th = document.createElement("th");
				th.innerText = "Action";
				tr.appendChild(th);

				return tr;
			}

			_prepareRow(row) {

				var tr;

				if (row instanceof HTMLTableRowElement) {
					tr = $(row);
					tr.empty();
					tr.prop("editItem", {});
				} else {
					tr = $("<tr></tr>");
					tr.prop("item", row);
				}

				return {
					tr: tr,
					item: tr.prop("item")
				};

			}

			_createButton(parent, label, action) {
				var button = document.createElement("button");
				button.innerText = label;
				button.setAttribute(action, "");
				parent.appendChild(button);
			}

			_createActionColumn(parent, buttons) {
				var tdAction = document.createElement("td");
				tdAction.classList.add("center");
				buttons.forEach((button) => {
					this._createButton(tdAction, button.label, button.action);
				});
				parent.append(tdAction);
				return parent;
			}

			_bodyEditRow(row) {

				row = this._prepareRow(row);

				this._config.columns.forEach(function(column) {
					var td = $("<td></td>");
					var fieldValue = row.item[column.field];
					var fieldType;
					switch (column.format) {
						case "currency":
							fieldType = "number";
							break;
						case "date":
							fieldType = "date";
							fieldValue = `${row.item[column.field].getFullYear()}-${row.item[column.field].getMonth()<9 ? "0" : ""}${row.item[column.field].getMonth()+1}-${row.item[column.field].getDate()<10 ? "0" : ""}${row.item[column.field].getDate()}`;
							break;
					}

					var input = $("<input>");
					input.attr("type", fieldType);
					input.val(fieldValue);
					row.tr.prop("editItem")[column.field] = function() {
						return input.val();
					};

					row.tr.append(td.append(input));
				});

				return this._createActionColumn(row.tr, [
					{ label: "Save", action: "data-action-save" },
					{ label: "Cancel", action: "data-action-cancel" }
				]);
			}

			_bodyViewRow(row) {

				row = this._prepareRow(row);

				this._config.columns.forEach(function(column) {
					var td = document.createElement("td");
					var fieldValue;
					if (!column.format) {
						fieldValue = row.item[column.field];
					} else {
						if (typeof column.format === "function") {
							fieldValue = column.format(row.item[column.field]);
						} else {
							switch (column.format) {
								case "currency":
									fieldValue = row.item[column.field].toLocaleString("en-US", {
										style: "currency",
										currency: "USD"
									});
									td.classList.add("right");
									break;
								case "date":
									fieldValue = row.item[column.field].toLocaleDateString();
									td.classList.add("center");
									break;
							}
						}
					}

					if (column.align) {
						td.classList.add(column.align);
					}

					td.innerText = fieldValue;
					row.tr.append(td);
				});

				return this._createActionColumn(row.tr, [
					{ label: "Edit", action: "data-action-edit" }
				]);
			}

			_configureEvents(tableElement) {

				tableElement.on("click", "[data-action-edit]", (e) => {

					console.dir(tableElement);

					if (this._currentEditRow) {
						this._bodyViewRow(this._currentEditRow);
					}

					this._currentEditRow = $(e.target).closest("tr")[0];

					this._bodyEditRow(this._currentEditRow);

					this.trigger("edit_row", { row: this._currentEditRow });

				});

				var that = this;

				tableElement.on("click", "[data-action-cancel]", function(e) {

					var row = $(e.target).closest("tr")[0];

					that._bodyViewRow(row);
					that._currentEditRow = null;

					that.trigger("cancel_row", { row: row });


				});

				tableElement.on("click", "[data-action-save]", (e) => {

					var
						tr = $(e.target).closest("tr"),
						item = tr.prop("item"),
						editItem = tr.prop("editItem");

					this._config.columns.forEach(function(column) {
						switch (column.format) {
							case "currency":
								item[column.field] = parseInt(editItem[column.field](), 10);
								break;
							case "date":
								item[column.field] = new Date(editItem[column.field]());
								break;
							default:
								item[column.field] = editItem[column.field]();
								break;
						}
					});

					this._bodyViewRow(this._currentEditRow);
					this._currentEditRow = null;

					that.trigger("save_row", { row: row, item: item });
				});

			}

			show(list, parentElement) {

				var that = this;
				this._list = list;
				this._parentElement = parentElement;

				var tableElement = $(this._template);
				this._configureEvents(tableElement);
				tableElement.find("thead").append(this._headerRow());

				var tbody = tableElement.find("tbody");
				this._list.forEach(function(item) {
					tbody.append(that._bodyViewRow(item));
				});

				$(this._parentElement).append(tableElement);
			}

		};

	});
