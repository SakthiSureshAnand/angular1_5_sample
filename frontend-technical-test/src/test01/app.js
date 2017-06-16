
export const test01 = {
    template: require('./app.html'),
    controller(dataService,$log,$scope,$translate) {
    	$scope.trnsLng = "French"
    	$scope.trns = false;
    	dataService.async().then(function(data){
    		$log.log("DATA");
    		$scope.items = data;
    	});
    	
    	$scope.changeLang = function(langKey){
    		// alert(langKey)
    		$scope.trns = !$scope.trns;
    		if($scope.trns){
    			$scope.trnsLng = "English"	
    		} else {
    			$scope.trnsLng = "French"
    		}
    		
    		  var data = $translate.use(langKey);
    		  $log.log(' hI data',angular.fromJson(data));
    	}

    }
};
