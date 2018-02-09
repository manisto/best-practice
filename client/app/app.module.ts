import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { AuthorsModule } from "./authors/authors.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AuthorsModule,
    AppRoutingModule
  ],
  providers: [],
  declarations: [AppComponent, HomeComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
