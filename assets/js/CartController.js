app.controller('CartController', ['$scope', function($scope) {
  $scope.cart =
    [
      {
        item: 'Chicken Sandwich',
        price: 5.99
      },
      {
        item: 'Waffle Fries',
        price: 1.99
      },
      {
        item: 'IceDream',
        price: 2.99
      }
    ]
}];
