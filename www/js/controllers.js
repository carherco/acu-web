angular.module('acu.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('UsuariosCtrl', ['$http', 'CONFIG', function($http,CONFIG) {
    mv = this;
    mv.usuarios = [];
    $http.get(CONFIG.apiUrl + '/norest/resumen').then(
        function(response){
            mv.usuarios = response.data;
        }
    );
}])

.controller('GastosCtrl', ['$http', 'CONFIG', '$stateParams', function($http,CONFIG,$stateParams) {
    mv = this;
    mv.grupo = $stateParams.grupo || 1;
    mv.gastos = [];
    
///api/participaciongastos.json?filters[participante]=11
    var filter = '?';
    filter += 'filter[grupo]=1&';
    filter += 'filter[participante]=11';
  
    $http.get(CONFIG.apiUrl + '/gastos'+filter).then(
        function(response){
            mv.gastos = response.data;
        }
    );
}])

.controller('AportacionesCtrl', ['$http', 'CONFIG', '$stateParams', function($http, CONFIG, $stateParams) {
    mv = this;
    mv.grupo = $stateParams.grupo || 1;
    mv.usuarios = [];
    mv.aportaciones = [];
    mv.totalsByUser = [];
//    
//    for(var i = 0; i < mv.usuarios.length; i++){
//        mv.usuarios.username;
//        mv.totalsByUser[user] = mv.aportaciones[i].cantidad;
//    }

///api/aportacions.json?filters[aportador]=11
    $http.get(CONFIG.apiUrl + '/aportacions').then(
        function(response){
            mv.aportaciones = response.data;
            //mv.calcTotalsByUser();
        }
    );
    
//    $http.get(CONFIG.apiUrl + '/usuarios').then(
//        function(response){
//            mv.usuarios = response.data;
//        }
//    );
    
//    mv.calcTotalsByUser = function(){
//        var user = '';
//        for(var i = 0; i < mv.usuarios.length; i++){
//            mv.aportaciones[i].aportador.username;
//            mv.totalsByUser[user] = mv.aportaciones[i].cantidad;
//        }
//        return mv.totalsByUser;
//    };
}])

.controller('ResumenCtrl', function($scope, $stateParams) {
});
