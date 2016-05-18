var app = angular.module("myApp", []);

app.controller('mainController', function($scope){

  $scope.revenueItem = [{ 'name':'Item 1', 'oneTime': 100, 'monthly': 50}, {'name':'Item 2', 'oneTime': 50, 'monthly': 25}];
  $scope.expenseItem = [{ 'name':'Expense 1', 'oneTime': 100, 'monthly': 50}, {'name':'Expense 2', 'oneTime': 50, 'monthly': 25}];

  $scope.test = function() {
    console.log($scope.revenueItem);
  }

  $scope.itemNumber = function() {
    var count = 1;
    for (var i = 0; i < $scope.revenueItem.length; i++) {
      count++
    }
    return "Item " + count
    }

  $scope.ExpenseNumber = function() {
    var count = 1;
    for (var i = 0; i < $scope.expenseItem.length; i++) {
      count++
    }
    return "Expense " + count
    }


  $scope.addRow = function(){
  	$scope.revenueItem.push({'name': $scope.itemNumber(), 'oneTime': $scope.oneTime, 'monthly':$scope.monthly });
  	$scope.ExpenseName ='';
  	$scope.oneTime ='';
  	$scope.monthly ='';
  };

  $scope.ExpenseAddRow = function(){
  	$scope.expenseItem.push({ 'name': $scope.ExpenseNumber(), 'oneTime': $scope.ExpenseOneTime, 'monthly':$scope.ExpenseMonthly });
  	$scope.ExpenseName ='';
  	$scope.ExpenseOneTime ='';
  	$scope.ExpenseMonthly ='';
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

  $scope.removeExpenseRow = function(name){
		var index = -1;
		var expArray = eval( $scope.expenseItem );
		for( var i = 0; i < expArray.length; i++ ) {
			if( expArray[i].name === name ) {
				index = i;
				break;
			}
		}
		$scope.expenseItem.splice( index, 1 );
	};

  $scope.revenueTotal = function() {
    return 'wired up'

  }




})
