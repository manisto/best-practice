import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
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
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
