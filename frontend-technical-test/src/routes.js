export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider,$translateProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
 $translateProvider.useStaticFilesLoader({
    prefix: '/test01/',
    suffix: '.json'
  });
  // load 'en' table on startup
  $translateProvider.preferredLanguage('en');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('test01', {
      url: '/test01',
      component: 'test01'
    })
    .state('test02', {
      url: '/test02',
      component: 'test02'
    });
}
