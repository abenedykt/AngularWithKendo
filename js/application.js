/**
 * Created by Arek on 12.07.13.
 */



angular.module('DemoApp', [ 'kendo.directives' ]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', { templateUrl: 'app/partials/home.html',   controller: HomeController }).
        otherwise({redirectTo: '/'});
}]);