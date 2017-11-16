import { AuthorService } from './author.service';
import template from './authors-container.html';

class AuthorsContainerController {
    static $inject = ['authorService'];

    constructor(private authorService: AuthorService) {}

    saveAuthor(author: any) {
        console.log(author);
    }
}

export let AuthorsContainerComponent: ng.IComponentOptions = {
    template: template,
    controller: AuthorsContainerController
};