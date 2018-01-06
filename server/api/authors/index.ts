import * as express from 'express';
import { Author } from '../../db/models';

export let authorRouter = express.Router();

authorRouter.get('/', function(request, response) {
    Author.findAll()
    .then((rawAuthors) => {
        let authors = rawAuthors.map(author => author.get());
        response.json(authors);
    });
});

authorRouter.get('/:id', function(request, response) {
    let id = Number(request.params['id']);

    Author.findById(id)
        .then((rawAuthor) => {
            response.json(rawAuthor.get());
        })
        .catch(() => {
            response.status(404).send("Not found!!!11!11");
        });
});