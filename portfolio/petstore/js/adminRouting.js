(function () {

	angular.module('petStoreAdmin', ['ngResource', 'ui.router'])
		.config(function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/login');

			$stateProvider
				.state('login', {
					url: '/login',
					templateUrl: '/views/adminLogin.html'
				})
				.state('main', {
					url: '/main',
					templateUrl: '/views/adminMain.html'
				});

		});

})();