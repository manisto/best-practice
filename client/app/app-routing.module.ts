import { NgModule } from "@angular/core";
import { Ng2StateDeclaration, UIRouterModule } from "@uirouter/angular";

const states: Ng2StateDeclaration[] = [];

@NgModule({
  imports: [UIRouterModule.forRoot({ states: states })],
  exports: [UIRouterModule]
})
export class AppRoutingModule {}
