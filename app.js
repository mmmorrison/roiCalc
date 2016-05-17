var app = angular.module("myApp", []);

app.controller('mainController', function($scope){

  $scope.revenueItem = [
                        { 'name':'Item 1',
                        	'oneTime': 100,
                        	'monthly': 50},
                        { 'name':'Item 2',
    	                    'oneTime': 50,
    	                    'monthly': 25},
                       ];

  $scope.addRow = function(){
	$scope.revenueItem.push({ 'oneTime': $scope.oneTime, 'monthly':$scope.monthly });
	$scope.name='';
	$scope.oneTime='';
	$scope.monthly='';
  };

  function MainCtrl($scope) {
	$scope.count = 0;
}

//Directive that returns an element which adds buttons on click which show an alert on click
app.directive("addbuttonsbutton", function(){
	return {
		restrict: "E",
		template: "<button addbuttons>Click to add buttons</button>"
	}
});

//Directive for adding buttons on click that show an alert on click
app.directive("addbuttons", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(){
			scope.count++;
			angular.element(document.getElementById('space-for-buttons')).append($compile("<div><button class='btn btn-default' data-alert="+scope.count+">Show alert #"+scope.count+"</button></div>")(scope));
		});
	};
});

//Directive for showing an alert on click
app.directive("alert", function(){
	return function(scope, element, attrs){
		element.bind("click", function(){
			console.log(attrs);
			alert("This is alert #"+attrs.alert);
		});
	};
});
})
