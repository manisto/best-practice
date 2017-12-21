import * as models from '../../models';
import template from './author-list.html';

class AuthorListController {
    private authors: models.AuthorAttributes[];

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