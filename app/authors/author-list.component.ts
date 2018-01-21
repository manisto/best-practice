import * as models from '../../models';
import { authorsPath } from './authors.path';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorAttributes } from '../../models/AuthorAttributes';

@Component({
    selector: 'author-list',
    templateUrl: `${authorsPath}/author-list.html`
})
export class AuthorListComponent implements OnChanges, OnInit {

    constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) {}

    @Input() authors: models.AuthorAttributes[];

    ngOnInit(): void {
        this.route.data.subscribe((data: { authors: AuthorAttributes[] }) => {
            this.authors = data.authors;
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['authors']) {
        }
    }
}