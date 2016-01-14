(function () {

	angular.module('petStoreAdmin', [{
        files: [
            'portfolio/petstore/controllers/adminControllers.js',
            'portfolio/petstore/controllers/adminProductController.js'
        ]
    }])
		.config(function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('^/petstore/login');

			$stateProvider
				.state('root.portfolio.petstore.adminlogin', {
					url: '^/petstore/adminlogin',
                    views: {
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/adminLogin.html'
                        }
                    }
				})
				.state('root.portfolio.petstore.adminmain', {
					url: '^/petstore/adminmain',
                    views: {
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/adminMain.html'
                        }
                    }
				});

		});

})();