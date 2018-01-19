import { NgModule } from '@angular/core';
import { AuthorsContainerComponent } from './authors-container.component';
import { AuthorListComponent } from './author-list.component';
import { AuthorEditComponent } from './author-edit.component';
import { AuthorService } from './author.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
    providers: [AuthorService],
    declarations: [
        AuthorListComponent,
        AuthorEditComponent,
        AuthorsContainerComponent,
    ]
})
export class AuthorsModule {}

import { authorsRoutes } from './authors.routes';
