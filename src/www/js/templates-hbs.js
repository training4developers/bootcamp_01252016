define(['handlebars'], function(Handlebars) {

this["handlebars"] = this["handlebars"] || {};

this["handlebars"]["accountRow"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td>"
    + alias4(((helper = (helper = helpers.emailAddress || (depth0 != null ? depth0.emailAddress : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"emailAddress","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</td><td><a href=\"#\" data-action-view-account>View</a> | <a href=\"#\" data-action-edit-account>Edit</a></td>";
},"useData":true});

this["handlebars"]["accountTable"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<table class=\"table table-striped\"><thead><tr><th>Email</th><th>First Name</th><th>Last Name</th><th>Action</th></tr></thead><tbody></tbody></table>";
},"useData":true});

this["handlebars"]["appAccountContent"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>Email Address: "
    + alias4(((helper = (helper = helpers.emailAddress || (depth0 != null ? depth0.emailAddress : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"emailAddress","hash":{},"data":data}) : helper)))
    + "</div><div>First Name: "
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "</div><div>Last Name: "
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});

this["handlebars"]["appAccountFooter"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<small>&copy; 2015 Intuit, Inc. All Rights Reserved.</small>";
},"useData":true});

this["handlebars"]["appAccountHeader"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Accounts App</h1>";
},"useData":true});

this["handlebars"]["appAccountLayout"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header id=\"page-header\"></header><nav id=\"menu\"></nav><main id=\"content\"></main><footer id=\"page-footer\"></footer>";
},"useData":true});

this["handlebars"]["appAccountMenu"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"main-menu\"></div>";
},"useData":true});

this["handlebars"]["appSample"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1></h1><h2>Form Demo - Two Way Binding</h2><form><div><label for=\"input-text-example-edit\">Input Text:</label><input id=\"input-text-example-edit\" type=\"text\"></div><div><label for=\"input-checkbox-example-edit\">Input Checkbox:</label><input id=\"input-checkbox-example-edit\" type=\"checkbox\"></div><div>Input Radio:<fieldset><legend>Select Color</legend><div><input id=\"input-radio-example-edit-red\" type=\"radio\" name=\"input-radio-example-edit\" value=\"red\"><label for=\"input-radio-example-edit-red\">Red</label></div><div><input id=\"input-radio-example-edit-white\" type=\"radio\" name=\"input-radio-example-edit\" value=\"white\"><label for=\"input-radio-example-edit-white\">White</label></div><div><input id=\"input-radio-example-edit-blue\" type=\"radio\" name=\"input-radio-example-edit\" value=\"blue\"><label for=\"input-radio-example-edit-blue\">Blue</label></div></fieldset></div><div><label for=\"select-example-edit\">Select:</label><select id=\"select-example-edit\"></select></div><div><label for=\"textarea-example-edit\">Textarea:</label><textarea id=\"textarea-example-edit\" rows=\"5\" cols=\"40\"></textarea></div></form><h2>View Demo - One Way Binding</h2><div><div>Input Text: <span id=\"input-text-example\"></span></div><div>Input Checkbox: <span id=\"input-checkbox-example\"></span></div><div>Input Radio: <span id=\"input-radio-example\"></span></div><div>Select: <span id=\"select-example\"></span></div><div>Textarea: <span id=\"textarea-example\"></span></div></div>";
},"useData":true});

this["handlebars"]["demo"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1></h1><div><label for=\"page-header-edit\">Page Header:</label><input type=\"text\" id=\"page-header-edit\"></div>";
},"useData":true});

this["handlebars"]["editAccount"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form><div><label for=\"emailAddress\">Email Address:</label><input id=\"emailAddress\" name=\"emailAddress\" value=\""
    + alias4(((helper = (helper = helpers.emailAddress || (depth0 != null ? depth0.emailAddress : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"emailAddress","hash":{},"data":data}) : helper)))
    + "\"></div><div><label for=\"password\">Password:</label><input id=\"password\" name=\"password\" value=\"\" type=\"password\"></div><div><label for=\"firstName\">First Name:</label><input id=\"firstName\" name=\"firstName\" value=\""
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "\"></div><div><label for=\"lastName\">Last Name:</label><input id=\"lastName\" name=\"lastName\" value=\""
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "\"></div><button type=\"button\" data-save-account>Save</button> <button type=\"button\" data-delete-account>Delete</button> <button type=\"button\" data-view-account>Cancel</button></form>";
},"useData":true});

this["handlebars"]["editView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div><label for=\"value-edit\">Value:</label><input type=\"text\" id=\"value-edit\"></div>";
},"useData":true});

this["handlebars"]["home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div>HBS Welcome "
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "! <button class=\"ok\">Ok!</button></div>";
},"useData":true});

this["handlebars"]["noAccountsRow"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<tr><td colspan=\"3\">No Accounts</td></tr>";
},"useData":true});

this["handlebars"]["rowView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td>"
    + alias4(((helper = (helper = helpers.emailAddress || (depth0 != null ? depth0.emailAddress : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"emailAddress","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</td>";
},"useData":true});

this["handlebars"]["summaryView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Summary: <span id=\"summary\"></span></h2>";
},"useData":true});

this["handlebars"]["tableView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<thead><tr><th>Email Address</th><th>First Name</th><th>Last Name</th></tr></thead><tbody></tbody>";
},"useData":true});

this["handlebars"]["viewAccount"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form><div>Email Address: "
    + alias4(((helper = (helper = helpers.emailAddress || (depth0 != null ? depth0.emailAddress : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"emailAddress","hash":{},"data":data}) : helper)))
    + "</div><div>First Name:"
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "</div><div>Last Name:"
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</div><button type=\"button\" data-edit-account>Edit Account</button> <button type=\"button\" data-list-accounts>Return to List</button></form>";
},"useData":true});

return this["handlebars"];

});