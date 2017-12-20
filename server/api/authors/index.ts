import * as express from 'express';
import { author, book } from '../../db/schema';

export let authorRouter = express.Router();

authorRouter.get('/', function(request, response) {
    author.findAll()
    .then((rawAuthors) => {
        let authors = rawAuthors.map(author => author.get());
        response.json(authors);
    });
});

authorRouter.get('/:id', function(request, response) {
    let id = Number(request.params['id']);

    author.findById(id)
        .then((rawAuthor) => {
            response.json(rawAuthor.get());
        })
        .catch(() => {
            response.status(404).send("Not found!!!11!11");
        });
});