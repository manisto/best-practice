import { Component, Input } from "@angular/core";
import { AuthorAttributes } from "../../../models/AuthorAttributes";

@Component({
  selector: "author-list",
  templateUrl: "./author-list.html"
})
export class AuthorListComponent {
  @Input() authors: AuthorAttributes[];
}
