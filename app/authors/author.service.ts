import * as models from '../models';

export class AuthorService {
    static $inject = ['$http'];
    private $http: ng.IHttpService;

    constructor($http: ng.IHttpService) {
        this.$http = $http;
    }

    listAuthors(): ng.IPromise<models.Author[]> {
        return this.$http.get<models.Author[]>('/api/authors').then(response => response.data);
    }

    getAuthor(id: number): ng.IPromise<models.Author> {
        return this.$http.get<models.Author>(`/api/authors/${id}`).then(Response => Response.data);
    }
}