import { NgModule, Injectable, Inject } from '@angular/core';
import { RouterModule, Routes, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthorService } from './author.service';
import { AuthorsContainerComponent } from './authors-container.component';
import { AuthorListComponent } from './author-list.component';
import { AuthorEditComponent } from './author-edit.component';
import { AuthorAttributes } from '../../models/AuthorAttributes';
import { Observable } from 'rxjs/Observable';
import { AuthorListResolver } from './author-list-resolver.service';

const authorsRoutes: Routes = [
    {
        path: 'authors',
        component: AuthorsContainerComponent,
        children: [
            { path: '', component: AuthorListComponent, resolve: { authors: AuthorListResolver } },
            { path: ':id', component: AuthorEditComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(authorsRoutes)
    ],
    exports: [RouterModule]
})
export class AuthorsRoutingModule {}

// let resolveAuthor = (authorService: AuthorService, $stateParams: uiRouter.StateParams) => authorService.getAuthor($stateParams['id']);
// resolveAuthor.$inject = ['authorService', '$stateParams'];