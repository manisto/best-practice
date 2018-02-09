import { NgModule } from "@angular/core";
import { Ng2StateDeclaration, UIRouterModule } from "@uirouter/angular";
import { HomeComponent } from "./home.component";

const states: Ng2StateDeclaration[] = [
  {
    name: "home",
    component: HomeComponent,
    url: "/"
  }
];

@NgModule({
  imports: [UIRouterModule.forRoot({ states: states, otherwise: "/" })],
  exports: [UIRouterModule]
})
export class AppRoutingModule {}
