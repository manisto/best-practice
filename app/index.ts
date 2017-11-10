import { appModule } from './app.module';

declare global {
    var angular: ng.IAngularStatic;
}

export default appModule.name;