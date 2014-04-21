app.controller('StocksCtrl', ['$scope', 'Stock', '$filter', function ($scope, Stock, $filter) {
  $scope.stocks = Stock.all();

  $scope.createStock = function () {
    var attr = {};
    attr.symbol = $filter('uppercase')($scope.newSymbol);
    var newStock = Stock.create(attr);
    $scope.stocks.push(newStock);
    $scope.newSymbol = "";
  };

  $scope.deleteStock = function (id, idx) {
    $scope.stocks.splice(idx, 1);
    return Stock.delete(id);
  };
}]);
