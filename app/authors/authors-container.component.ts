import { AuthorService } from './author.service';

class AuthorsContainerController {
    static $inject = ['authorService'];

    constructor(private authorService: AuthorService) {}

    saveAuthor(author: any) {
        console.log(author);
    }
}

export let AuthorsContainerComponent: ng.IComponentOptions = {
    templateUrl: '/app/authors/authors-container.html',
    controller: AuthorsContainerController
};