import { Author } from './author';

class AuthorListController {
    private authors: Author[];

    $onChanges(changes: ng.IOnChangesObject): void {
        if (changes['authors']) {
        }
    }
}

export let AuthorListComponent: ng.IComponentOptions = {
    templateUrl: '/app/authors/author-list.html',
    controller: AuthorListController,
    bindings: {
        authors: '<'
    }
};