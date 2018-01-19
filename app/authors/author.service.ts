import * as models from '../../models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
    constructor(private http: HttpClient) {}

    listAuthors(): Promise<models.AuthorAttributes[]> {
        return this.http.get<models.AuthorAttributes[]>('/api/authors').toPromise();
    }

    getAuthor(id: number): Promise<models.AuthorAttributes> {
        return this.http.get<models.AuthorAttributes>(`/api/authors/${id}`).toPromise();
    }
}