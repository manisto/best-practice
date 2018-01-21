import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorService } from './author.service';
import { AuthorsContainerComponent } from './authors-container.component';
import { AuthorListComponent } from './author-list.component';
import { AuthorEditComponent } from './author-edit.component';

const authorsRoutes: Routes = [
    {
        path: 'authors',
        component: AuthorsContainerComponent,
        children: [
            { path: '', component: AuthorListComponent },
            { path: '/:id', component: AuthorListComponent },
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

// let resolveAuthors = (authorService: AuthorService) => authorService.listAuthors();
// resolveAuthors.$inject = ['authorService'];

// let resolveAuthor = (authorService: AuthorService, $stateParams: uiRouter.StateParams) => authorService.getAuthor($stateParams['id']);
// resolveAuthor.$inject = ['authorService', '$stateParams'];