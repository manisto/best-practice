import { AuthorService } from './author.service';
import * as models from '../../models';
import template from './authors-container.html';

class AuthorsContainerController {
    static $inject = ['authorService'];

    constructor(private authorService: AuthorService) {}

    saveAuthor(author: models.AuthorAttributes) {
        console.log(author);
    }
}

export let AuthorsContainerComponent: ng.IComponentOptions = {
    template: template,
    controller: AuthorsContainerController
};