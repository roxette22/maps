// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent': {
                        templateUrl: "templates/home.html"
                    }
                }
            })

            .state('app.device', {
                url: "/device",
                views: {
                    'menuContent': {
                        templateUrl: "templates/device.html",
                        controller: "DeviceCtrl"
                    }
                }
            })

            .state('app.device-item', {
                url: "/device/:itemId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/device-item.html",
                        controller: "DeviceDemoCtrl"
                    }
                }
            })

            .state('app.device-motion', {
                url: "/device-motion",
                views: {
                    'menuContent': {
                        templateUrl: "templates/device-motion.html",
                        controller: "DeviceMotionCtrl"
                    }
                }
            })

            .state('app.device-motion-item', {
                url: "/device-motion/:itemId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/device-motion-item.html",
                        controller: "DeviceMotionDemoCtrl"
                    }
                }
            })

            .state('app.network-information', {
                url: "/network-information",
                views: {
                    'menuContent': {
                        templateUrl: "templates/network-information.html",
                        controller: "NetworkInformationCtrl"
                    }
                }
            })

            .state('app.network-information-item', {
                url: "/network-information/:itemId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/network-information-item.html",
                        controller: "NetworkInformationDemoCtrl"
                    }
                }
            })

            .state('app.vibration', {
                url: "/vibration",
                views: {
                    'menuContent': {
                        templateUrl: "templates/vibration.html",
                        controller: "VibrationCtrl"
                    }
                }
            })

            .state('app.vibration-item', {
                url: "/vibration/:itemId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/vibration-item.html",
                        controller: "VibrationDemoCtrl"
                    }
                }
            })

            .state('app.geolocation', {
                url: "/geolocation",
                views: {
                    'menuContent': {
                        templateUrl: "templates/geolocation.html",
                        controller: "GeolocationCtrl"
                    }
                }
            })

            .state('app.geolocation-item', {
                url: "/geolocation/:itemId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/geolocation-item.html",
                        controller: "GeolocationDemoCtrl"
                    }
                }
            })

            .state('app.about', {
                url: "/about",
                views: {
                    'menuContent': {
                        templateUrl: "templates/about.html",
                        controller: "AboutCtrl"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });

