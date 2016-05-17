var app = angular.module("myApp", []);

app.controller('mainController', function($scope){

  $scope.revenueItem = [{ 'name':'Item 1', 'oneTime': 100, 'monthly': 50}, {'name':'Item 2', 'oneTime': 50, 'monthly': 25}];

  $scope.itemNumber = function() {
    var count = 1;
    for (var i = 0; i < $scope.revenueItem.length; i++) {
      count++
    }
    return "Item " + count
    console.log(count);
    }


  $scope.addRow = function(){
  	$scope.revenueItem.push({ 'name': $scope.itemNumber(), 'oneTime': $scope.oneTime, 'monthly':$scope.monthly });
  	$scope.name='';
  	$scope.oneTime='';
  	$scope.monthly='';
  };


  $scope.removeRow = function(name){
		var index = -1;
		var revArray = eval( $scope.revenueItem );
		for( var i = 0; i < revArray.length; i++ ) {
			if( revArray[i].name === name ) {
				index = i;
				break;
			}
		}
		$scope.revenueItem.splice( index, 1 );
	};


})
