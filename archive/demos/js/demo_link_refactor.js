(function(angular) {

  // setup injection
	directive.$inject = ["$http"]

	// define directive function
	function directive($http) {

		return {
			restrict: "AE",
			scope: false,
			template: "<button ng-click='clickMe()'>Click Me</button>",
			link: function(scope) {

				scope.clickMe = function() {

					if (doSomeLogic(1,2)) {
						// do something
					}

				}

			}
		};

	}

	// register directive function
	angular.module("MyApp").directive("myDir", directive);

	// Support Functions

	function doSomeLogic(a,b) {
		return a > b;
	}

})(angular);
