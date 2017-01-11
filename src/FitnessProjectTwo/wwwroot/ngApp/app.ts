namespace FitnessProjectTwo {

    angular.module('FitnessProjectTwo', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: FitnessProjectTwo.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('topics', {
                url: '/topics',
                templateUrl: '/ngApp/views/topics.html',
                controller: FitnessProjectTwo.Controllers.TopicController,
                controllerAs: 'controller'
            })
            .state('addtopic', {
                url: '/addtopic',
                templateUrl: '/ngApp/views/addTopic.html',
                controller: FitnessProjectTwo.Controllers.AddTopicController,
                controllerAs: 'controller'
            })
            .state('edittopic', {
                url: '/edittopic/:id',
                templateUrl: '/ngApp/views/editTopic.html',
                controller: FitnessProjectTwo.Controllers.EditTopicController,
                controllerAs: 'controller'
            })
            .state('deletetopic', {
                url: '/deletetopic/:id',
                templateUrl: '/ngApp/views/deleteTopic.html',
                controller: FitnessProjectTwo.Controllers.DeleteTopicController,
                controllerAs: 'controller'
            })
            .state('addsubtopic', {
                url: '/addsubtopic/:id',
                templateUrl: '/ngApp/views/addSubTopic.html',
                controller: FitnessProjectTwo.Controllers.AddSubTopicController,
                controllerAs: 'controller'
            })
            .state('subtopics', {
                url: '/subtopics/:id',
                templateUrl: '/ngApp/views/subtopics.html',
                controller: FitnessProjectTwo.Controllers.SubTopicController,
                controllerAs: 'controller'
            })
            .state('comments', {
                url: '/comments/:id',
                templateUrl: '/ngApp/views/comments.html',
                controller: FitnessProjectTwo.Controllers.CommentsController,
                controllerAs: 'controller'
            })
            .state('secret', {
                url: '/secret',
                templateUrl: '/ngApp/views/secret.html',
                controller: FitnessProjectTwo.Controllers.SecretController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: FitnessProjectTwo.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: FitnessProjectTwo.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('externalRegister', {
                url: '/externalRegister',
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: FitnessProjectTwo.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            }) 
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: FitnessProjectTwo.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    
    angular.module('FitnessProjectTwo').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('FitnessProjectTwo').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

    

}
