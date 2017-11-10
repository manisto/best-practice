import { authorsRoutes } from './authors.routes';
import { AuthorsContainerComponent } from './authors-container.component';
import { AuthorListComponent } from './author-list.component';
import { AuthorEditComponent } from './author-edit.component';
import { AuthorService } from './author.service';

export let authorsModule = angular.module('app.authors', []);

authorsModule.config(authorsRoutes);

authorsModule.component('authorsContainer', AuthorsContainerComponent);
authorsModule.component('authorList', AuthorListComponent);
authorsModule.component('authorEdit', AuthorEditComponent);
authorsModule.service('authorService', AuthorService);