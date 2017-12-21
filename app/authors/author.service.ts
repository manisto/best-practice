import * as models from '../../models';

export class AuthorService {
    static $inject = ['$http'];
    private $http: ng.IHttpService;

    constructor($http: ng.IHttpService) {
        this.$http = $http;
    }

    listAuthors(): ng.IPromise<models.AuthorAttributes[]> {
        return this.$http.get<models.AuthorAttributes[]>('/api/authors').then(response => response.data);
    }

    getAuthor(id: number): ng.IPromise<models.AuthorAttributes> {
        return this.$http.get<models.AuthorAttributes>(`/api/authors/${id}`).then(Response => Response.data);
    }
}