import * as models from '../../models';
import { authorsPath } from './authors.path';

class AuthorListController {
    private authors: models.AuthorAttributes[];

    $onChanges(changes: ng.IOnChangesObject): void {
        if (changes['authors']) {
        }
    }
}

export let AuthorListComponent: ng.IComponentOptions = {
    templateUrl: `${authorsPath}/author-list.html`,
    controller: AuthorListController,
    bindings: {
        authors: '<'
    }
};