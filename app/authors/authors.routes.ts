import * as uiRouter from '@uirouter/angularjs';
import { AuthorService } from './author.service';

export function authorsRoutes($stateProvider: uiRouter.StateProvider) {
    $stateProvider.state('authors', {
        component: 'authorsContainer',
        url: '/authors',
        abstract: true,
        resolve: {
            authors: resolveAuthors
        }
    }).state('authors.list', {
        component: 'authorList',
        url: ''
    }).state('authors.edit', {
        component: 'authorEdit',
        url: '/:id',
        resolve: {
            author: resolveAuthor
        }
    });
}

authorsRoutes.$inject = ['$stateProvider'];

let resolveAuthors = (authorService: AuthorService) => authorService.listAuthors();
resolveAuthors.$inject = ['authorService'];

let resolveAuthor = (authorService: AuthorService, $stateParams: uiRouter.StateParams) => authorService.getAuthor($stateParams['id']);
resolveAuthor.$inject = ['authorService', '$stateParams'];