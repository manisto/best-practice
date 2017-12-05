let express = require('express');

let router = express.Router();
let { author } = require('../../db/schema');

router.get('/', function(request, response) {
    author.findAll()
    .then((rawAuthors) => {
        let authors = rawAuthors.map(author => author.dataValues);
        console.log(authors);
        response.json(authors);
    });
});

router.get('/:id', function(request, response) {
    let author = authors.find(author => author.id === Number(request.params['id']));

    if (author) {
        return response.json(author);
    } else {
        return response.status(404).send("Not found");
    }
});

module.exports = router;