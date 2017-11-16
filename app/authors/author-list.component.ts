import { Author } from './author';
import template from './author-list.html';

class AuthorListController {
    private authors: Author[];

    $onChanges(changes: ng.IOnChangesObject): void {
        if (changes['authors']) {
        }
    }
}

export let AuthorListComponent: ng.IComponentOptions = {
    template: template,
    controller: AuthorListController,
    bindings: {
        authors: '<'
    }
};