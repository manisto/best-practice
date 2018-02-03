import { NgModule, Injectable, Inject } from "@angular/core";
import {
  Ng2StateDeclaration,
  UIRouterModule,
  Transition
} from "@uirouter/angular";
import { AuthorService } from "./author.service";
import { AuthorsContainerComponent } from "./authors-container.component";
import { AuthorListComponent } from "./author-list.component";
import { AuthorEditComponent } from "./author-edit.component";
import { AuthorAttributes } from "../../../models/AuthorAttributes";

const authorStates: Ng2StateDeclaration[] = [
  {
    name: "authors",
    url: "/authors",
    abstract: true,
    component: AuthorsContainerComponent
  },
  {
    name: "authors.list",
    url: "",
    component: AuthorListComponent,
    resolve: [
      {
        token: "authors",
        deps: [AuthorService],
        resolveFn: resolveAuthorList
      }
    ]
  },
  {
    name: "authors.edit",
    url: "/:id",
    component: AuthorEditComponent,
    resolve: [
      {
        token: "author",
        deps: [AuthorService, Transition],
        resolveFn: resolveAuthor
      }
    ]
  }
];

@NgModule({
  imports: [UIRouterModule.forChild({ states: authorStates })],
  exports: [UIRouterModule]
})
export class AuthorsRoutingModule {}

export function resolveAuthorList(authorService: AuthorService) {
  return authorService.listAuthors();
}

export function resolveAuthor(
  authorService: AuthorService,
  $transition$: Transition
) {
  return authorService.getAuthor($transition$.params().id);
}
