import * as models from '../../models';
import { authorsPath } from './authors.path';

interface OnSaveAuthorValue {
    author: models.AuthorAttributes;
}

class AuthorEditController {
    static $inject: string[] = [];

    /* Bindings start */
    author: models.AuthorAttributes;
    onSaveAuthor: (value: OnSaveAuthorValue) => void;
    /* Bindings end */

    constructor() {}

    saveAuthor() {
        this.onSaveAuthor({ author: this.author });
    }
}

export let AuthorEditComponent: ng.IComponentOptions = {
    templateUrl: `${authorsPath}/author-edit.html`,
    controller: AuthorEditController,
    bindings: {
        author: '<',
        onSaveAuthor: '&'
    }
};