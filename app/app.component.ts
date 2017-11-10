import * as uiRouter from '@uirouter/angularjs';

class AppController {
    $stateService: uiRouter.StateService;
    static $inject: string[] = [];

    constructor($stateService: uiRouter.StateService) {
        this.$stateService = $stateService;
    }
}

export let AppComponent: ng.IComponentOptions = {
    templateUrl: '/app/app.html'
};