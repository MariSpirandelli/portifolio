var app = angular.module("app",[ 'ngResource','pascalprecht.translate']);

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

app.controller('TranslateController', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
});

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
	    	// Store hash
  			var hash = path.replace('/','#');
			// Using jQuery's animate() method to add smooth page scroll
		  	// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
		  	$('html, body').animate({
		    	scrollTop: $(hash).offset().top
		  	}, 900);
		  
	        return "active";
	    } else {
	        return "";
	    }
	}
});