import * as models from "../../../models";
import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthorService {
  constructor(@Inject(HttpClient) private http: HttpClient) {}

  listAuthors(): Observable<models.AuthorAttributes[]> {
    return this.http.get<models.AuthorAttributes[]>("/api/authors");
  }

  getAuthor(id: number): Observable<models.AuthorAttributes> {
    return this.http.get<models.AuthorAttributes>(`/api/authors/${id}`);
  }
}
