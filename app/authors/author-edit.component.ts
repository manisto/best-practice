import * as models from '../../models';
import template from './author-edit.html';

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
    template: template,
    controller: AuthorEditController,
    bindings: {
        author: '<',
        onSaveAuthor: '&'
    }
};