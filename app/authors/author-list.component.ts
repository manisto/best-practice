import * as models from '../../models';
import { authorsPath } from './authors.path';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'author-list',
    templateUrl: `${authorsPath}/author-list.html`
})
export class AuthorListComponent implements OnChanges {
    @Input() authors: models.AuthorAttributes[];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['authors']) {
        }
    }
}