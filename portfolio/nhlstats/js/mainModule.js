(function () {

	angular.module('nhlStatsApp', [{
		files: [
			'portfolio/nhlstats/js/nhlStatsController.js',
			'portfolio/nhlstats/js/nhlTeamsController.js',
			'portfolio/nhlstats/js/nhlStatsService.js'
		]
	}])
		.config(function ($stateProvider, $urlRouterProvider) {
			
			$urlRouterProvider.otherwise('/teams');
			
			$stateProvider
				.state('root.portfolio.nhlstats', {
					url: '/',
					views: {
						'statsContent@root.portfolio': {
							templateUrl: '/portfolio/nhlstats/views/teams.html'
						}
					}
				})
				.state('root.portfolio.nhlstats.points', {
					url: 'points',
					views: {
						'statsContent@root.portfolio': {
							templateUrl: '/portfolio/nhlstats/views/points.html'
						}
					}
				})
				.state('root.portfolio.nhlstats.goals', {
					url: 'goals',
					views: {
						'statsContent@root.portfolio': {
							templateUrl: '/portfolio/nhlstats/views/goals.html'
						}
					}
				})
				.state('root.portfolio.nhlstats.assists', {
					url: 'assists',
					views: {
						'statsContent@root.portfolio': {
							templateUrl: '/portfolio/nhlstats/views/assists.html'
						}
					}
				})
				.state('root.portfolio.nhlstats.plusminus', {
					url: 'plusminus',
					views: {
						'statsContent@root.portfolio': {
							templateUrl: '/portfolio/nhlstats/views/plusminus.html'
						}
                    }
				})
				.state('root.portfolio.nhlstats.team', {
					url: 'teams/:team',
					views: {
						'statsContent@root.portfolio': {
							templateUrl: '/portfolio/nhlstats/views/team.html'
						}
					}
				})
			
		})

})();