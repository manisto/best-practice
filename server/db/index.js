const database = require('./database');
const { author, book } = require('./schema');
const faker = require('faker');

let authors = [];

for (let i = 0; i < 10; i++) {
    let name = faker.name.findName();
    authors.push({ name });
}

async function run() {
    await database.sync({ force: true });
    await author.bulkCreate(authors);
    let allAuthors = await author.findAll();
    console.log(allAuthors.map(author => author.dataValues));
}

run();