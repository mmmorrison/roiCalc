var app = angular.module("myApp", []);

app.controller('mainController', function($scope){

  $scope.revenueItem = [{ 'name':'Item 1', 'oneTime': 100, 'monthly': 50}, {'name':'Item 2', 'oneTime': 50, 'monthly': 25}, {'name': 'Item 3', 'oneTime': 25, 'monthly': 85}];
  // $scope.revenueItem = [];
  $scope.expenseItem = [{ 'name':'Expense 1', 'oneTime': 500, 'monthly': 20}, {'name':'Expense 2', 'oneTime': 200, 'monthly': 40}];

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

  $scope.oneTimeTotal = function() {
    var total = 0;
    for (var i = 0; i < $scope.revenueItem.length; i++) {
      total += $scope.revenueItem[i].oneTime;
    }
    return total
  };

  $scope.monthlyTotal = function() {
    var total = 0;
    for (var i = 0; i < $scope.revenueItem.length; i++) {
      total += $scope.revenueItem[i].monthly;
    }
    return total
  };

  $scope.totalRevenue = function() {
    var total = 0;
    return total = $scope.oneTimeTotal() + ($scope.monthlyTotal()*12);
  }

  $scope.expenseOneTime = function() {
    var total = 0;
    for (var i = 0; i < $scope.expenseItem.length; i++) {
      total += $scope.expenseItem[i].oneTime;
    }
    return total
  };

  $scope.expenseMonthly = function() {
    var total = 0;
    for (var i = 0; i < $scope.expenseItem.length; i++) {
      total += $scope.expenseItem[i].monthly;
    }
    return total
  };

  $scope.totalExpenses = function() {
    var total = 0;
    return total = $scope.expenseOneTime() + ($scope.expenseMonthly() * 12);
  };

  $scope.monthlyContributionProfit = function() {
    var total = 0;
    return total += $scope.monthlyTotal() - $scope.expenseMonthly();
  }

  $scope.totalContributionProfit = function() {
    var total = 0;
    return total += $scope.totalRevenue() - $scope.totalExpenses();
  };

  $scope.contributionMargin = function() {
    var total = 0;
    total += ($scope.totalContributionProfit() / $scope.totalRevenue()) * 100
    return total.toFixed(0) + '%';
  };

  $scope.capitalROI = function() {
    var total = 0;
    total += ($scope.expenseOneTime() - $scope.oneTimeTotal()) / $scope.monthlyContributionProfit();
    return total.toFixed(1)
  };





  // Capital ROI (Months) = (One-Time Expenses – One-Time Revenue) / Monthly Contribution Profit






})
