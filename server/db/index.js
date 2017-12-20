const database = require('./database');
const { author, book } = require('./schema');
const faker = require('faker');

let authors = [];

for (let i = 0; i < 10; i++) {
    let name = faker.name.findName();
    authors.push({ name });
}

async function populateDatabase() {
    await database.sync({ force: true });
    let createdAuthors = await author.bulkCreate(authors);
    console.log(createdAuthors.map(author => author.dataValues));

    createdAuthors.forEach((author) => {
        book.create({
            title: faker.company.catchPhrase(),
            authorId: author.id
        });
    });
}

populateDatabase();