import { AuthorService } from "./author.service";
import * as models from "../../../models";
import { Component, Inject } from "@angular/core";

@Component({
  selector: "authors-container",
  templateUrl: "./authors-container.html"
})
export class AuthorsContainerComponent {
  constructor(@Inject(AuthorService) private authorService: AuthorService) {}

  saveAuthor(author: models.AuthorAttributes) {
    console.log(author);
  }
}
