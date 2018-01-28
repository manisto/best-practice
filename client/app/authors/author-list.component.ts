import { authorsPath } from "./authors.path";
import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  OnInit,
  Inject
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthorAttributes } from "../../../models/AuthorAttributes";

@Component({
  selector: "author-list",
  templateUrl: `./author-list.html`
})
export class AuthorListComponent implements OnChanges, OnInit {
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) {}

  @Input() authors: AuthorAttributes[];

  ngOnInit(): void {
    this.route.data.subscribe((data: { authors: AuthorAttributes[] }) => {
      this.authors = data.authors;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["authors"]) {
    }
  }
}
