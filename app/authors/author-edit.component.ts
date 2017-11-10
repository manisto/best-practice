import * as models from '../models';

interface OnSaveAuthorValue {
    author: models.Author;
}

class AuthorEditController {
    static $inject: string[] = [];

    /* Bindings start */
    author: models.Author;
    onSaveAuthor: (value: OnSaveAuthorValue) => void;
    /* Bindings end */

    constructor() {}

    saveAuthor() {
        this.onSaveAuthor({ author: this.author });
    }
}

export let AuthorEditComponent: ng.IComponentOptions = {
    templateUrl: '/app/authors/author-edit.html',
    controller: AuthorEditController,
    bindings: {
        author: '<',
        onSaveAuthor: '&'
    }
};