var app = angular.module('calculatorApp', []);

app.controller('calculatorCtrl', con);


function con($scope){
    $scope.display = "";

    
    $scope.math = function(val){
      $scope.display += val;
    };

    $scope.c = function(val){
      $scope.display = val;
    };

    $scope.e = function(){
        $scope.display= eval($scope.display);
    };
}




/*var myApp = angular.module('myApp', []);

 myApp.controller('calculatorCtrl',function ($scope) {  


$scope.operators = ['+', '-', '*', '/'];
$scope.selectedOperator = $scope.operators[0];



 $scope.updateOutput = function (btn) {
    if ($scope.output == "0" || $scope.newNumber) {
        $scope.output = btn;
        $scope.newNumber = false;
    } else {
        $scope.output += String(btn);
    }
    $scope.pendingValue = toNumber($scope.output);
};

$scope.calculate = function() {
    var A = parseInt($scope.firstNumber);
    var B = parseInt($scope.secondNumber);
    var C = 0;

    switch ($scope.selectedOperator) {
        case '+':
            C = A + B;
            break;
        case '-':
            C = A - B;
            break;
        case '*':
            C = A * B;
            break;
        case '/':
            C = A / B;
            break;                
    }

    $scope.result = C;
}; });*/