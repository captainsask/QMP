(function(){
    var carApp=angular.module("qMotorStore", []);
    carApp.controller("CarController", [ '$http', function($http){
        var carStore = this;
        this.cars = [];
        $http.get('/assets/json/vehicles.json').success(function(data){
            carStore.cars = data;
        })
    }]);

    carApp.controller("OrderController", ['$http', function($http){
        var orderStore = this;
        this.orders = [];
        $http.get('/assets/json/orders.json').success(function(data){
            orderStore.orders = data;
        })
    }]);

    carApp.directive("vehicleLayout", function(){
        return {
            restrict:"E",
            templateUrl:'/templates/vehicle-layout.html'
        };
    });

    carApp.directive("ordersLayout", function(){
        return {
            restrict:"E",
            templateUrl:"/templates/orders-layout.html"
        };
    });
})();