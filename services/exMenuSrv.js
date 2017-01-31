angular.module('exApp').service('exMenuSrv', ['$q', function($q) {

	this.getMenu = function() {
    var menus = [
      {
        title:"Academics"
      },{
        title:"Admissions"
      },{
        title:"Interactions"
      },{
        title:"Reports"
      }
    ];
    return menus;
	};
  
}]);
