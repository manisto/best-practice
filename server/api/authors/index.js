let express = require('express');

let router = express.Router();
let { author, book } = require('../../db/schema');

router.get('/', function(request, response) {
    author.findAll()
    .then((rawAuthors) => {
        let authors = rawAuthors.map(author => author.dataValues);
        response.json(authors);
    });
});

router.get('/:id', function(request, response) {
    let id = Number(request.params['id']);

    author.findById(id)
        .then((rawAuthor) => {
            response.json(rawAuthor.dataValues);
        })
        .catch(() => {
            response.status(404).send("Not found!!!11!11");
        });
});

module.exports = router;