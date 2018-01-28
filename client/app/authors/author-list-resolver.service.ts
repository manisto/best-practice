import { Injectable, Inject } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { AuthorService } from "./author.service";
import { AuthorAttributes } from "../../../models/AuthorAttributes";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthorListResolver implements Resolve<AuthorAttributes[]> {
  constructor(@Inject(AuthorService) private authorService: AuthorService) {}

  resolve(): Observable<AuthorAttributes[]> {
    return this.authorService.listAuthors();
  }
}
