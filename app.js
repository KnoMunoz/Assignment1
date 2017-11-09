(function() {
	'use strict';

	angular.module('LunchCheckApp', []).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = [ '$scope' ];
	function LunchCheckController($scope) {
		$scope.mealList = "";
		$scope.toMuchMessage = "";

		$scope.checkTooMuch = function() {
			if($scope.mealList == "") {
				$scope.toMuchMessage = "Please enter data first!";
			} else {
				$scope.toMuchMessage = "";
				var arrayOfMeals = getItems($scope.mealList);
				if(arrayOfMeals.length >= 4) {
					$scope.toMuchMessage = "Too much!";
				} else {
					$scope.toMuchMessage = "Enjoy!";
				}
			}
		};
		
		/*
		 * getItems method uses filter function to delete empty elements
		 */
		function getItems(mealList) {
			var arrayOfMeals = mealList.split(",");
			var newArrayOfMeals = arrayOfMeals.filter(function(meal) {
				return meal.trim().length > 0;
			})
			return newArrayOfMeals;
		};
	};

})();