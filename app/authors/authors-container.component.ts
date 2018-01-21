import { AuthorService } from './author.service';
import * as models from '../../models';
import { authorsPath } from './authors.path';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'authors-container',
    templateUrl: `${authorsPath}/authors-container.html`
})
export class AuthorsContainerComponent {
    constructor(@Inject(AuthorService) private authorService: AuthorService) {}

    saveAuthor(author: models.AuthorAttributes) {
        console.log(author);
    }
}