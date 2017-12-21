import { database } from './database';
import { author, book } from './schema';
import * as faker from 'faker';
import { AuthorAttributes } from '../../models';

let authors: AuthorAttributes[] = [];

for (let i = 0; i < 10; i++) {
    let name = faker.name.findName();
    authors.push({ name });
}

async function populateDatabase() {
    await database.sync({ force: true });
    let createdAuthors = await author.bulkCreate(authors);

    createdAuthors.forEach((author) => {
        book.create({
            title: faker.company.catchPhrase(),
            authorId: author.get().id
        });
    });
}

populateDatabase();