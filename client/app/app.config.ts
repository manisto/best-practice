export function appConfig($locationProvider: ng.ILocationProvider, $compileProvider: ng.ICompileProvider) {
    $locationProvider.html5Mode(true);
    $compileProvider.debugInfoEnabled(false);
};

appConfig.$inject = ['$locationProvider', '$compileProvider'];