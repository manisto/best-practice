import { BookAttributes } from "./BookAttributes";

export interface AuthorAttributes {
    id?: number;
    name: string;
    books?: BookAttributes[];
}