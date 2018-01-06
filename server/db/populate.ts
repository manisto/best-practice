import { sequelize } from './database';
import { Book, Author } from './models';
import * as faker from 'faker';
import { AuthorAttributes } from '../../models';

let authors: AuthorAttributes[] = [];

for (let i = 0; i < 10; i++) {
    let name = faker.name.findName();
    authors.push({ name });
}

async function populateDatabase() {
    await sequelize.sync({ force: true });
    let createdAuthors = await Author.bulkCreate(authors);

    createdAuthors.forEach((author) => {
        Book.create({
            title: faker.company.catchPhrase(),
            authorId: author.get().id
        });
    });
}

populateDatabase();