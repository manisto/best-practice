let express = require('express');
let faker = require('faker');

let router = express.Router();
let nextId = 1;
let authors = [];

for (let i = 0; i < 10; i++) {
    authors.push({
        id: nextId++,
        name: faker.name.findName()
    });
}

router.get('/', function(request, response) {
    response.json(authors);
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