angular.module('acuAPP', ['ionic', 'acu.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.constant('CONFIG', {
    apiUrl: 'http://localhost:8000/api',
    itemsByPage: 10
})
    
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.usuarios', {
    url: '/usuarios',
    views: {
      'menuContent': {
        templateUrl: 'templates/usuarios.html',
        controller: 'UsuariosCtrl',
        controllerAs: 'UsuariosCtrl'
      }
    }
  })

  .state('app.gastos', {
      url: '/gastos',
//      url: '/gastos/:grupo',
      views: {
        'menuContent': {
          templateUrl: 'templates/gastos.html',
          controller: 'GastosCtrl',
          controllerAs: 'GastosCtrl'
        }
      }
    })
    .state('app.aportaciones', {
      url: '/aportaciones',
//      url: '/aportaciones/:grupo',
      views: {
        'menuContent': {
          templateUrl: 'templates/aportaciones.html',
          controller: 'AportacionesCtrl',
          controllerAs: 'AportacionesCtrl'
        }
      }
    })

  .state('app.resumen', {
    url: '/resumen',
    views: {
      'menuContent': {
        templateUrl: 'templates/resumen.html',
        controller: 'ResumenCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/resumen');
});
