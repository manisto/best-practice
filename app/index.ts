import { appModule } from './app.module';

declare global {
    var angular: ng.IAngularStatic;
}

export {};

export default appModule.name;