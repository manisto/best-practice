import { AuthorService } from './author.service';
import * as models from '../../models';
import { authorsPath } from './authors.path';

class AuthorsContainerController {
    static $inject = ['authorService'];

    constructor(private authorService: AuthorService) {}

    saveAuthor(author: models.AuthorAttributes) {
        console.log(author);
    }
}

export let AuthorsContainerComponent: ng.IComponentOptions = {
    templateUrl: `${authorsPath}/authors-container.html`,
    controller: AuthorsContainerController
};