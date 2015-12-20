(function () {

    angular.module('nhlStatsApp')
        .controller('nhlTeamsCtrl', nhlTeamsCtrl);

    function nhlTeamsCtrl(nhlStatsSvc, $stateParams) {
        
        var vm = this;       
        var teamUrl = 'https://jsonp.nodejitsu.com/?url=http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/' + $stateParams.team + '/iphone/clubroster.json';
        
        //TEAMS------------------------------
		nhlStatsSvc.getStats(teamUrl)
			.then(function (data) {
				vm.team = [];
				var goalie = data.goalie.map(function (obj) {
					return [obj.imageUrl, obj.name, obj.number, obj.position, obj.height, obj.weight, obj.birthdate, obj.age, obj.birthplace];
				});
				var defensemen = data.defensemen.map(function (obj) {
					return [obj.imageUrl, obj.name, obj.number, obj.position, obj.height, obj.weight, obj.birthdate, obj.age, obj.birthplace];
				});
				var forwards = data.forwards.map(function (obj) {
					return [obj.imageUrl, obj.name, obj.number, obj.position, obj.height, obj.weight, obj.birthdate, obj.age, obj.birthplace];
				});
				vm.team = goalie.concat(defensemen).concat(forwards);
			})
			.catch(function (err) {
				vm.errorTeam = err;
			});
        
    }

})();