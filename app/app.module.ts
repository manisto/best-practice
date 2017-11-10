import { appConfig } from './app.config';
import { AppComponent } from './app.component';
import { authorsModule } from './authors/authors.module';

export let appModule = angular.module('app', [
    'ui.router',
    authorsModule.name
]);

appModule.config(appConfig);
appModule.component('app', AppComponent);