import * as models from "../../../models";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "author-edit",
  templateUrl: "./author-edit.html"
})
export class AuthorEditComponent {
  @Input() author: models.AuthorAttributes;
  @Output() onSaveAuthor = new EventEmitter<models.AuthorAttributes>();

  saveAuthor() {
    this.onSaveAuthor.emit(this.author);
  }
}
