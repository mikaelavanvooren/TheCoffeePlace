/**
 * Created by Mikaela on 6/4/15.
 */
angular.module('myApp',['ngRoute']);


angular.module('myApp').config(function($routeProvider){

    $routeProvider

        .when ('/products', {
        templateUrl: 'products.html',
        controller: 'cartControl'
    })
        .when ('/aboutUs', {
        templateUrl: 'about.html'
    })
        .when ('/checkout', {
        templateUrl: 'checkout.html',
        controller: 'cartControl'
    })
        .otherwise ({
        templateUrl: 'main.html',
        controller: 'mainControl'
    })
});

angular.module('myApp').service('cartService', function(){
    this.totalPrice = 0;
    this.totalQuantity = 0;
    this.data = [
        {name: 'Black Coffee', photoSrc: 'images/coffeeblack.JPG', price: 2.75, quantity: 0},
        {name: 'Cold Brew', photoSrc: 'images/coffeecoldbrew.JPG', price: 4, quantity: 0},
        {name: 'Latte with Art', photoSrc: 'images/latte-art.JPG', price: 3.50, quantity: 0},
        {name: 'Siphoned Coffee', photoSrc: 'images/coffeesiphon.JPG', price: 6, quantity: 0},
        {name: 'Black Tea', photoSrc: 'images/blacktea.JPG', price: 2.75, quantity: 0},
        {name: 'Green Tea', photoSrc: 'images/greentea.JPG', price: 2.75, quantity: 0},
        {name: 'Vietnamese Iced', photoSrc: 'images/vietnameseicedcoffee.JPG', price: 4, quantity: 0}
    ];

});


angular.module('myApp').controller('cartControl', ['$scope', 'cartService', function($scope, cartService) {


        $scope.totalPrice = cartService.totalPrice;
        $scope.totalQuantity = cartService.totalQuantity;
    $scope.data = cartService.data;


    $scope.changeTotals = function(){
        var total = 0;
        for (var i = 0; i < $scope.data.length; i++){
            total = $scope.data[i].quantity + total;
        }
        cartService.totalQuantity = total;
    };

    $scope.changeTotQuantity = function(){
        var total = 0;
        for (var i = 0; i < $scope.data.length; i++){
            total = $scope.data[i].quantity + total;
        }
        cartService.totalQuantity = total;
    };

    $scope.changeTotPrice = function(){
        var total = 0;
        for (var i = 0; i < $scope.data.length; i++) {
            total = $scope.data[i].quantity * $scope.data[i].price + total;
        }
        cartService.totalPrice = total;
    };


    $scope.updateQuantity = function(num){
        //$scope.data[num].quantity quantity= $scope.temp[num];
        $scope.changeTotQuantity();
        $scope.changeTotPrice();
        console.log(cartService.totalQuantity);
        $scope.totalPrice = cartService.totalPrice;
        $scope.totalQuantity = cartService.totalQuantity;


    };



}]);

angular.module('myApp').controller('mainControl', function($scope) {
    $scope.photos = [
        {name: 'item1', photoSrc: 'images/coffeeblack.JPG'},
        {name: 'item2', photoSrc: 'images/greentea.JPG'},
        {name: 'item3', photoSrc: 'images/coffeecoldbrew.JPG'},
        {name: 'item4', photoSrc: 'images/latte-art.JPG'}
    ];

    $scope.hideForm = function() {
        $("#ContactUs").hide();
    };

});