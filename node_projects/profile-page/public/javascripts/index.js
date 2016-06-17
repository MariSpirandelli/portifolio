var app = angular.module("app",[ 'ngResource', 'ngRoute','pascalprecht.translate']);

// Use this method to register work which needs to be performed on module
// loading
app.config(function($resourceProvider, $translateProvider) {
	// to avoid the app to add an '\' in the end of the requesting url
	$resourceProvider.defaults.stripTrailingSlashes = false;
	//translation
	$translateProvider.useStaticFilesLoader({
	  prefix: '/languages/',
	  suffix: '.json'
	});
	// $translateProvider.translations('en', 'enUs.json')
	// .translations('de', 'ptBr.json');
  
  $translateProvider.preferredLanguage('enUs');
  //$translateProvider.useLocalStorage();
  $translateProvider.useSanitizeValueStrategy('escape');
 //  $translateProvider.determinePreferredLanguage(function () {
 //  // define a function to determine the language
 //  // and return a language key
	// });
});

//---------------
// Page Translation
//---------------
app.controller('TranslateController', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
});

//---------------
// Set menu as active
//---------------
app.controller('NavController', function ($scope, $location) {
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
    });

    $scope.getClass = function (path) {
	    if(path === '/') {
	        if($location.path() === '/') {
	            return "active";
	        } else {
	            return "";
	        }
	    }
	 
	    if ($location.path().substr(0, path.length) === path) {		  
	        return "active";
	    } else {
	        return "";
	    }
	}
});

//---------------
// Routes
//---------------
app.config(['$routeProvider', function ($routeProvider) {
  	$routeProvider
    	.when('/', {
      		templateUrl: '../templates/home.html',
    	})
    	.when('/about', {
      		templateUrl: '../templates/about.html',
   		})
   		.when('/portifolio', {
      		templateUrl: '../templates/portifolio.html',
   		})
   		.when('/skills', {
      		templateUrl: '../templates/skills.html',
   		})
   		.when('/contact', {
      		templateUrl: '../templates/contact.html',
   		});
}]);