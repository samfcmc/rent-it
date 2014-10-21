var app = angular.module('rentit', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', 
	function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'partials/home.html'
		});	
}]);
